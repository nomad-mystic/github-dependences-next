// Community Modules
import express, {Express, Request, Response} from 'express';
import morgan from 'morgan';

// Next.js properties
import next from 'next';
import { NextServer, RequestHandler } from 'next/dist/server/next';

// Routes
import KeyRoute from './api/v1/routes/key-route';
import ReposRoute from './api/v1/routes/repos-route';

// Services
import MongoDBService from './api/v1/services/mongo-db-service';

// Development specific
if (process.env.NODE_ENV === 'development') {

    MongoDBService.closeConnection().catch(err => console.error(err));

}

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

    // Creat the connection to our DB
    new MongoDBService();

    // Append routes
    expressServer.use('/api/v1/key', new KeyRoute().router);
    expressServer.use('/api/v1/repos', new ReposRoute().router);

    expressServer.get('*', (req: Request, res: Response) => {
        return handler(req, res);
    });

    expressServer.listen(expressServer.get('PORT'), () => {
        console.log('Express server listening on port ' + expressServer.get('PORT'));
    });
});
