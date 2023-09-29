// Community Modules
import express, {Express, Request, Response} from 'express';
import morgan from 'morgan';
import next from 'next';

// Routes
import KeyRoutes from './routes/key-routes';
import ReposRoutes from './routes/repos-routes';

// Build values for the Next.js
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

/**
 * @description
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
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
