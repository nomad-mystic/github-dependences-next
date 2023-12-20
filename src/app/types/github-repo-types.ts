export type GitHubDataType = {
    name: string;
    id: number;
    updated_at: string;
};


export type GithubRepoType = {
    data: Array<GitHubDataType>
};
