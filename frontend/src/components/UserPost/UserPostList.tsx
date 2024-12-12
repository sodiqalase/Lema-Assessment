"use client";

import React from "react";
import NewPostTrigger from "./NewPostTrigger";
import PostCard from "./PostCard";

const UserPostList = () => {
    return (
        <section className="grid grid-cols-2 sm:grid-cols-3 gap-5 auto-rows-[293px]">
            <NewPostTrigger />
            {Array(10)
                .fill("")
                .map((_, index) => {
                    return <PostCard key={`card-${index}`} />;
                })}
        </section>
    );
};

export default UserPostList;
