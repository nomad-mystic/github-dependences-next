'use client';

// Community
import React, { useEffect, useState } from 'react';

// Styles
import './dashboard.css';

// Components
import Sidebar from '@/app/components/sidebar/sidebar';
import { ScrollArea } from '@/app/components/ui/scroll-area';

// Types
import GitHubRepoType from '@/app/types/github-repo-type';


/**
 * @description
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @return {React.JSX.Element}
 */
const DashboardPage = (): React.JSX.Element => {
    const [repos, setRepos] = useState([]);
    const [isError, setIsError] = useState(false);

    useEffect(() => {

        const callForRepos = async () => {
            try {
                const reposRaw = await fetch('/api/v1/repos/all');
                const reposJson = await reposRaw.json();

                console.log(reposJson);

                setRepos(reposJson.data);
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
                    !isError && repos.map((repo: GitHubRepoType) => {
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
