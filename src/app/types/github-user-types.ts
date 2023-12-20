export type GitHubUserDataType = {
    login: string;
    name: string;
    id: number;
    updated_at: string;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    total_private_repos: number;
    plan: {
        name: string;
    }
};

export type GithubUserType = {
    status: number,
    data: Array<GitHubUserDataType>
};
