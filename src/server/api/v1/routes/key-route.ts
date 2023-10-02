// Community Modules
import express, {Request, Response, Router} from 'express';

// Package Modules
import RouteInterface from '../interfaces/route-interface';

/**
 * @classdesc
 * @class
 * @author Keith Murphy | nomadmystics@gmail.com
 */
export default class KeyRoute implements RouteInterface {
    /**
     * @type Router
     */
    public router: Router;

    constructor() {
        this.router = express.Router();
        this.get();
        this.create();
        this.delete();
        this.update();
    }

    /**
     * @description
     * @public
     * @author Keith Murphy | nomadmystics@gmail.com
     *
     * @return {void}
     */
    public get = (): void => {
        try {

            this.router.get('/', (req: Request, res: Response): void => {
                res.send('Get key page');
            });

        } catch (err: any) {
            console.error(err);
        }
    }

    /**
     * @description
     * @public
     * @author Keith Murphy | nomadmystics@gmail.com
     *
     * @return {void}
     */
    public create = (): void => {
        try {

            this.router.post('/:key', (req: Request, res: Response): void => {
                res.send('Create key page');
            });

        } catch (err: any) {
            console.error(err);
        }
    }

    /**
     * @description
     * @public
     * @author Keith Murphy | nomadmystics@gmail.com
     *
     * @return {void}
     */
    public delete = (): void => {
        try {

            this.router.delete('/:key', (req: Request, res: Response): void => {
                res.send('Remove key page');
            });

        } catch (err: any) {
            console.error(err);
        }
    }

    /**
     * @description
     * @public
     * @author Keith Murphy | nomadmystics@gmail.com
     *
     * @return {void}
     */
    public update = (): void => {
        try {

            this.router.put('/:key', (req: Request, res: Response): void => {
                res.send('Remove key page');
            });

        } catch (err: any) {
            console.error(err);
        }
    }
}
