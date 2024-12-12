/* eslint-disable react-hooks/rules-of-hooks */

import useFetch, { IParams } from "@/hooks/useFetch";
import { IUser } from "@/interfaces/user.interface";

const UserQueryKeys = {
    fetchUsers: "FETCH_USERS",
    fetchUsersCount: "FETCH_USERS_COUNT",
};

const UsersApiUrl = {
    fetchUsers: "/users",
    fetchUsersCount: "/users/count",
};

const UserService = {
    fetchUsers: (params: IParams = {}) =>
        useFetch<IUser[]>({
            url: UsersApiUrl.fetchUsers,
            key: UserQueryKeys.fetchUsers,
            params,
        }),
    fetchUsersCount: (params: IParams = {}) =>
        useFetch<{ count: number }>({
            url: UsersApiUrl.fetchUsersCount,
            key: UserQueryKeys.fetchUsersCount,
            params,
        }),
};

export default UserService;
