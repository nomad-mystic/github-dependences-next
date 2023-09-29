// Community Modules
import express, {Express, Request, Response} from 'express';
import morgan from 'morgan';

// Next.js properties
import next from 'next';
import { NextServer, RequestHandler } from 'next/dist/server/next';

// Routes
import KeyRoutes from './api/v1/routes/key-routes';
import ReposRoutes from './api/v1/routes/repos-routes';

// Build values for Next.js
const dev: boolean = process.env.NODE_ENV !== 'production';
const nextServer: NextServer = next({dev});
const handler: RequestHandler = nextServer.getRequestHandler();

/**
 * @description Hook into the Next.js server lifecycle and create our Express API
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 * @see https://blog.logrocket.com/build-server-rendered-react-app-next-express/#why-express-next-js
 * @see https://levelup.gitconnected.com/set-up-next-js-with-a-custom-express-server-typescript-9096d819da1c
 *
 * @return void
 */
nextServer.prepare().then((): void => {
    // Build our app
    const expressServer: Express = express();

    // Set ENV
    expressServer.set('PORT', 3000);

    // Global Middleware
    expressServer.use(morgan('dev'));
    expressServer.use(express.json());

    // Append routes
    expressServer.use('/api/v1/key', new KeyRoutes().router);
    expressServer.use('/api/v1/repos', new ReposRoutes().router);

    expressServer.get('*', (req: Request, res: Response) => {
        return handler(req, res);
    });

    expressServer.listen(expressServer.get('PORT'), () => {
        console.log('Express server listening on port ' + expressServer.get('PORT'));
    });
});
