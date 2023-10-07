// Community Modules
import { NextFunction, Request, Response, Router } from 'express';
import passport from 'passport';

// Package Interfaces
import RouteInterface from '../interfaces/route-interface';

/**
 * @classdesc Setup routes for the User
 * @class UserRoute
 * @implements RouteInterface
 * @author Keith Murphy | nomadmystics@gmail.com
 */
export default class UserRoute implements RouteInterface {
    /**
     * @type Router
     */
   public router: Router;

    constructor() {
        this.router = Router();

        // Setup routes
        this.create().catch(err => console.log(err));
        this.delete().catch(err => console.log(err));
        this.get().catch(err => console.log(err));
        this.update().catch(err => console.log(err));
    };

    /**
     * @description Create new user data
     * @public
     * @author Keith Murphy | nomadmystics@gmail.com
     *
     * @return Promise<any>
     */
    public async create(): Promise<any> {
        this.router.post('/', (req: Request, res: Response): void => {

            // Authenticate with Passport
            passport.authenticate('create-user',
            {
                session: false,
            },
            async (req: Request, res: Response, next: NextFunction): Promise<void> => {

                // Send our response
                res.status(200).json({
                    message: 'Signup successful',
                    user: req.user
                });

            });
        });
    };

    /**
     * @description Delete a users data
     * @public
     * @author Keith Murphy | nomadmystics@gmail.com
     *
     * @return Promise<any>
     */
    public delete = async (): Promise<any> => {
        this.router.delete('/:id', (req: Request, res: Response): void => {
            res.send('DELETE User');
        });
    };

    /**
     * @description Get a users data
     * @public
     * @author Keith Murphy | nomadmystics@gmail.com
     *
     * @return Promise<any>
     */
    public get = async (): Promise<any> => {
        this.router.get('/:id', (req: Request, res: Response): void => {
            res.send('GET User');
        });
    };

    /**
     * @description Update a users data
     * @public
     * @author Keith Murphy | nomadmystics@gmail.com
     *
     * @return Promise<any>
     */
    public update = async (): Promise<any> => {
        this.router.put('/:id', (req: Request, res: Response): void => {
            res.send('PUT User');
        });
    };
}
