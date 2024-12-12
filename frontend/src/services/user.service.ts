/* eslint-disable react-hooks/rules-of-hooks */

import useFetch, { IParams } from "@/hooks/useFetch";

const UserQueryKeys = {
    fetchUsers: "FETCH_USERS",
};

const UsersApiUrl = {
    fetchUsers: "/task",
};

const UserService = {
    fetchUsers: (params: IParams = {}) =>
        useFetch({
            url: UsersApiUrl.fetchUsers,
            key: UserQueryKeys.fetchUsers,
            params,
        }),
};

export default UserService;
