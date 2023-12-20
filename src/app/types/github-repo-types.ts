export type GitHubReposDataType = {
    name: string;
    id: number;
    updated_at: string;
};


export type GithubRepoType = {
    status: number,
    data: Array<GitHubReposDataType>
};
