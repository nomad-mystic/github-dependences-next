// Community Modules
import { Octokit } from '@octokit/core';
import { OctokitResponse } from '@octokit/types';

/**
 * @classdesc
 * @class GithubService
 * @extends
 * @implements
 * @author Keith Murphy | nomadmystics@gmail.com
 */
export default class GithubService {
    /**
     * @description
     * @public
     * @author Keith Murphy | nomadmystics@gmail.com
     *
     * @return
     */
    public static getOctokitPackage = async (): Promise<Octokit | any> => {
        try {

            return new Octokit({
                auth: process.env.GITHUB_API_KEY,
            });

        } catch (err: any) {
            console.log('GithubService.getOctokitPackage');
            console.error(err);
        }
    }

    /**
     * @description
     * @public
     * @author Keith Murphy | nomadmystics@gmail.com
     *
     * @param {string} apiRoute
     * @return {Promise<OctokitResponse<any> | undefined>}
     */
    public static buildApiResponse = async (apiRoute: string): Promise<OctokitResponse<any> | undefined> => {
        try {
            const octokit = await this.getOctokitPackage();

            const response: OctokitResponse<any> = await octokit.request(apiRoute, {
                username: process.env.GITHUB_USERNAME as string,
                headers: {
                    'X-GitHub-Api-Version': '2022-11-28'
                }
            });

            return response;

        } catch (err: any) {
            console.log('GithubService.buildApiResponse');
            console.error(err);
        }
    }
}
