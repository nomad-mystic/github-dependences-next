// Community Modules
import express, { Request, Response, Router } from 'express';
import { Octokit } from '@octokit/core';
import { request } from '@octokit/request';
import { OctokitResponse } from '@octokit/types';

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
        this.getAll();
        this.getOne();
    }

    /**
     * @description
     * @public
     * @author Keith Murphy | nomadmystics@gmail.com
     *
     * @return {void}
     */
    public getAll = (): void => {
        try {

            this.router.get('/all', async (req: Request, res: Response): Promise<void> => {
                new Octokit({
                    auth: process.env.GITHUB_API_KEY,
                });

                const repos: OctokitResponse<any> = await request('GET /users/{username}/repos', {
                    username: 'nomad-mystic',
                    headers: {
                        'X-GitHub-Api-Version': '2022-11-28'
                    }
                });

                if (repos.status === 200) {

                    res.status(200);

                    res.send(repos);

                } else {

                    res.status(repos?.status);

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
