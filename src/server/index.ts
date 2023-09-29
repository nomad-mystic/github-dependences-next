// Community Modules
import express, {Express, Request, Response} from 'express';
import morgan from 'morgan';
import next from 'next';

// Routes
import KeyRoutes from './api/v1/routes/key-routes';
import ReposRoutes from './api/v1/routes/repos-routes';

// Build values for Next.js
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

/**
 * @description
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 * @see https://blog.logrocket.com/build-server-rendered-react-app-next-express/#why-express-next-js
 * @see https://levelup.gitconnected.com/set-up-next-js-with-a-custom-express-server-typescript-9096d819da1c
 *
 * @return void
 */
app.prepare().then(() => {
    // Build our app
    const app: Express = express();

    // Set ENV
    app.set('PORT', 3000);

    // Middleware
    app.use(morgan('dev'));
    app.use(express.json());

    // Append routes
    app.use('/api/v1.0/key', new KeyRoutes().router);
    app.use('/api/v1.0/repos', new ReposRoutes().router);

    app.get('*', (req, res) => {
        return handle(req, res);
    });

    app.listen(app.get('PORT'), () => {
        console.log('Express server listening on port ' + app.get('PORT'));
    });
});
