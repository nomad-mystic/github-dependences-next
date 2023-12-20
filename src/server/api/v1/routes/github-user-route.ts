// Community Modules
import express, { Request, Response, Router } from 'express';

// Package Modules
import GithubService from '../services/github-service';

// Package Interfaces
import RouteInterface from '../interfaces/route-interface';

import { allReposMock } from '../mocks/get-all-repos';
import { githubUser } from '../mocks/github-user';

/**
 * @classdesc Setup routes for GitHub repository endpoints
 * @class ReposRoute
 * @implements RouteInterface
 * @author Keith Murphy | nomadmystics@gmail.com
 */
export default class GithubUserRoute implements RouteInterface {
    /**
     * @type Router
     */
    public router: Router;

    constructor() {
        this.router = express.Router();

        // Setup routes
        this.getGitHubUser().catch(err => console.log(err));
    };

    /**
     * @description
     * @public
     * @author Keith Murphy | nomadmystics@gmail.com
     *
     * @return {void}
     */
    public getGitHubUser = async (): Promise<void> => {
        try {

            this.router.get('/', async (req: Request, res: Response): Promise<void> => {
                // const user = await GithubService.buildApiResponse('GET /user');

                const user = githubUser;

                if (user?.status && user?.status === 200) {

                    res.status(200);

                    res.send(user);

                } else {

                    res.status(user?.status as number);

                    res.send(user?.status);
                }
            });

        } catch (err: unknown) {
            console.error(err);
        }
    };
}
