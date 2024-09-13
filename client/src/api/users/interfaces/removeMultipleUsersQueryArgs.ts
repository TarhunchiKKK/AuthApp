export interface IRemoveMultipleUsersQueryArgs {
    headers: {
        Authorization: string;
    };
    body: {
        users: { id: string }[];
    };
}
