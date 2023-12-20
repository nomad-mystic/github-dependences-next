'use client';

// Community
import React, { useEffect, useState } from 'react';

// Styles
import './dashboard.css';

// Components
import Sidebar from '@/app/components/sidebar/sidebar';
import { ScrollArea } from '@/app/components/ui/scroll-area';
import { Card, CardTitle } from '@/app/components/ui/card';
import Link from 'next/link';

// Helpers
import { getJson } from '@/app/helpers/rest-helpers';

// Types
import { GithubRepoType, GitHubReposDataType } from '@/app/types/github-repo-types';
import { GithubUserType, GitHubUserDataType } from '@/app/types/github-user-types';

/**
 * @description
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @return {React.JSX.Element}
 */
const DashboardPage = (): React.JSX.Element => {
    const [repos, setRepos] = useState<Array<GitHubReposDataType>>([]);
    const [user, setUser] = useState<Array<GitHubUserDataType>>([]);
    const [isError, setIsError] = useState(false);

    useEffect(() => {

        const callForRepos = async () => {
            try {
                const response = await getJson('/api/v1/repos/all') as GithubRepoType | undefined;

                if (response && typeof response !== 'undefined') {

                    console.log(response);

                    setRepos(response.data);
                }
            } catch (err) {

                console.log(err);
                setIsError(true);

            }
        };

        callForRepos().catch(err => {
            console.log(err);
            setIsError(true);
        });
    }, []);

    useEffect(() => {

        const callForUser = async () => {
            try {
                const response = await getJson('/api/v1/github-user') as GithubUserType | undefined;

                if (response && typeof response !== 'undefined') {

                    console.log(response);

                    // setRepos(response.data);
                }
            } catch (err) {

                console.log(err);
                setIsError(true);

            }
        };

        callForUser().catch(err => {
            console.log(err);
            setIsError(true);
        });
    }, []);

    return (
        <main className="DashboardPage">
            <div className="DashboardPage-sidebar">

                <Sidebar/>

            </div>


            <section className="DashboardPage-content">
                <section className="DashboardPage-user">
                    <Card className="DashboardPage-userData">
                        <CardTitle>User data</CardTitle>
                    </Card>

                    <Card className="DashboardPage-userRepos">
                        <CardTitle>Repos</CardTitle>
                    </Card>

                    <Card className="DashboardPage-userStatics">
                        <CardTitle>Statics</CardTitle>
                    </Card>
                </section>

                <section className="DashboardPage-repos">
                    {
                        !isError && repos.map((repo: GitHubReposDataType) => {
                            return (
                                <Card key={ repo.id } className="DashboardPage-repo bg-cardBackground">
                                    <Link href={ `/repo/?current_repo=${ repo.name }` } className="DashboardPage-repoLink">
                                        <CardTitle className="lg:text-2xl">Name: { repo.name }</CardTitle>
                                        <h2 className="lg:text-2xl">Last Updated: { repo.updated_at }</h2>
                                    </Link>
                                </Card>
                            );
                        })
                    }
                </section>
            </section>
        </main>
    );
};

export default DashboardPage;
