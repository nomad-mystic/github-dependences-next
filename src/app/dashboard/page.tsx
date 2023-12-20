'use client';

// Community
import React, { useEffect, useState } from 'react';

// Styles
import './dashboard.css';

// Components
import Sidebar from '@/app/components/sidebar/sidebar';
import { ScrollArea } from '@/app/components/ui/scroll-area';

// Helpers
import { getJson } from '@/app/helpers/rest-helpers';

// Types
import { GithubRepoType, GitHubDataType } from '@/app/types/github-repo-types';

/**
 * @description
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @return {React.JSX.Element}
 */
const DashboardPage = (): React.JSX.Element => {
    const [repos, setRepos] = useState<Array<GitHubDataType>>([]);
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


    return (
        <main>
            <Sidebar/>

            <section className="DashboardPage">
                {
                    !isError && repos.map((repo: GitHubDataType) => {
                        return (
                            <article key={ repo.id }>
                                <h1>{ repo.name }</h1>
                                <h2>{ repo.updated_at }</h2>
                            </article>
                        );
                    })
                }
            </section>
        </main>
    );
};

export default DashboardPage;
