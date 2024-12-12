/* eslint-disable react-hooks/rules-of-hooks */

import useFetch from "@/hooks/useFetch";
import { useMutation } from "@/hooks/useMutation";
import { ICreatePostPayload, IPost } from "@/interfaces/post.interface";

const PostQueryKeys = {
    fetchUserPosts: `USER_POSTS`,
    createPost: `CREATE_POST`,
};

const PostApiUrl = {
    fetchUserPosts: (userId: string) => `/posts?userId=${userId}`,
    deletePost: (postId: string) => `/posts/delete?postId=${postId}`,
    createPost: `/posts/create`,
};

const PostService = {
    fetchUserPosts: (userId: string) =>
        useFetch<IPost[]>({
            url: PostApiUrl.fetchUserPosts(userId),
            key: PostQueryKeys.fetchUserPosts,
        }),
    createPost: () =>
        useMutation<ICreatePostPayload>({
            method: "post",
            url: PostApiUrl.createPost,
            customSuccessMessage: "Your post was successfully created.",
            invalidateKeys: [PostQueryKeys.fetchUserPosts],
        }),
    deletePost: () =>
        useMutation({
            method: "delete",
            url: ({ postId }) => PostApiUrl.deletePost(postId),
            customSuccessMessage: "Your post was successfully deleted",
            invalidateKeys: [PostQueryKeys.fetchUserPosts],
        }),
};

export default PostService;
