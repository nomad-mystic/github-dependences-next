'use client';

// Community
import React, { useEffect, useState } from 'react';

// Styles
import './dashboard.css';

// Components
import Sidebar from '@/app/components/sidebar/sidebar';
import { ScrollArea } from '@/app/components/ui/scroll-area';
import { Card } from '@/app/components/ui/card';

// Helpers
import { getJson } from '@/app/helpers/rest-helpers';

// Types
import { GithubRepoType, GitHubReposDataType } from '@/app/types/github-repo-types';
import { GithubUserType, GitHubUserDataType } from '@/app/types/github-user-types';
import Link from 'next/link';

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


            <section className="DashboardPage-content ">
                <section className="DashboardPage-user">
                    <section>
                        <h3>User data</h3>
                    </section>
                    <section>
                        <h3>Repos</h3>
                    </section>
                    <section>
                        <h3>Statics</h3>
                    </section>
                </section>

                <section className="DashboardPage-repos">
                    {
                        !isError && repos.map((repo: GitHubReposDataType) => {
                            return (
                                <Card key={ repo.id } className="DashboardPage-repo bg-cardBackground">
                                    <Link href="/repo/?current_repo={repo.name}" className="DashboardPage-repoLink">
                                        <h1 className="lg:text-2xl">Name: { repo.name }</h1>
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
