'use client';

import React, { useEffect, useState } from 'react';

// Components
import Sidebar from '@/app/components/sidebar/sidebar';


const DashboardPage = () => {
    const [repos, setRepos] = useState([]);
    const [isError, setIsError] = useState(false);

    useEffect(() => {

        const callForRepos = async () => {
            try {
                const reposRaw = await fetch('/api/v1/repos/all');
                const reposJson = await reposRaw.json();

                setRepos(reposJson);
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
            <Sidebar />

            <section>

            </section>
        </main>
    );
};

export default DashboardPage;
