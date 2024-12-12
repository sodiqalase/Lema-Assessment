"use client";

import BackButton from "@/components/BackButton";
import Loader from "@/components/Loader";
import UserPostList from "@/components/UserPost/UserPostList";
import { useURLQuery } from "@/hooks/useURLQuery";
import PostService from "@/services/post.service";
import { useParams, useRouter } from "next/navigation";

const UserPostPage = () => {
    const router = useRouter();

    const params = useParams<{ userId: string }>();
    const { value } = useURLQuery();

    const { data, isLoading } = PostService.fetchUserPosts(params.userId ?? "");

    const postCount = (data ?? []).length;

    if (!params.userId) {
        router.push("/");
    }

    if (isLoading) {
        return (
            <div className="w-full h-[20vh] flex items-center justify-center">
                <Loader />
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-y-4 pb-8">
            <BackButton text="Back to Users" />
            <h4 className="text-[36px] font-bold text-header">{value.name}</h4>
            <div className="text-sm text-primary">
                <span>{value.email} • </span>
                <span className="font-medium">{postCount} Posts</span>
            </div>

            <UserPostList userPosts={data ?? []} />
        </div>
    );
};

export default UserPostPage;
