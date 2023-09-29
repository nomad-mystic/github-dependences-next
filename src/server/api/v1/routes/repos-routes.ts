// Community Modules
import express, { Request, Response, Router } from 'express';

// Package Modules
import GithubService from '../services/github-service';

/**
 * @classdesc
 * @class ReposRoutes
 * @author Keith Murphy | nomadmystics@gmail.com
 */
export default class ReposRoutes {
    /**
     * @type Router
     */
    public router: Router;

    constructor() {
        this.router = express.Router();
        this.getAll().catch(err => console.log(err));
        this.getOne();
    }

    /**
     * @description
     * @public
     * @author Keith Murphy | nomadmystics@gmail.com
     *
     * @return {void}
     */
    public getAll = async (): Promise<void> => {
        try {

            this.router.get('/all', async (req: Request, res: Response): Promise<void> => {
                const repos = await GithubService.buildApiResponse('GET /user/repos');

                if (repos?.status && repos?.status === 200) {

                    res.status(200);

                    res.send(repos);

                } else {

                    res.status(repos?.status as number);

                    res.send(repos?.status);
                }
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
    public getOne = (): void => {
        try {

            this.router.get('/:id', (req: Request, res: Response): void => {
                res.send('Get Repos by ID page');
            });

        } catch (err: any) {
            console.error(err);
        }
    }
}
