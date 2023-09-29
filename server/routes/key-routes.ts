import express, {Express, Request, Response, Router} from 'express';


/**
 * @classdesc
 * @class
 * @author Keith Murphy | nomadmystics@gmail.com
 */
export default class KeyRoutes {
    /**
     * @type Router
     */
    public router: Router;

    constructor() {
        this.router = express.Router();
        this.getKey();
        this.createKey();
        this.deleteKey();
    }

    /**
     * @description
     * @public
     * @author Keith Murphy | nomadmystics@gmail.com
     *
     * @return {void}
     */
    public getKey = (): void => {
        try {

            this.router.get('', (req: Request, res: Response): void => {
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
    public createKey = (): void => {
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
    public deleteKey = (): void => {
        try {

            this.router.delete('/:key', (req: Request, res: Response): void => {
                res.send('Remove key page');
            });

        } catch (err: any) {
            console.error(err);
        }
    }
}
