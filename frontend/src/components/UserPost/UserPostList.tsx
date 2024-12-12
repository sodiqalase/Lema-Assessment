"use client";

import React from "react";
import NewPostTrigger from "./NewPostTrigger";
import PostCard from "./PostCard";
import { IPost } from "@/interfaces/post.interface";

interface Props {
    userPosts: IPost[];
}

const UserPostList = ({ userPosts }: Props) => {
    const noPost = userPosts.length === 0;

    return (
        <section className="grid grid-cols-2 sm:grid-cols-3 gap-5 auto-rows-[293px]">
            <NewPostTrigger />
            {noPost && (
                <div className="w-full  sm:col-span-2 h-full flex items-center justify-center">
                    <p className="text-primary">This user has no post.</p>
                </div>
            )}
            {userPosts.map((post, index) => {
                return <PostCard post={post} key={`card-${index}`} />;
            })}
        </section>
    );
};

export default UserPostList;
