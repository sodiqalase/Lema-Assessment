"use client";

import React, { useState } from "react";
import { TrashIcon } from "@heroicons/react/24/outline";
import { AnimatePresence } from "framer-motion";
import ConfirmationModal from "../Modal/ConfirmationModal";
import { IPost } from "@/interfaces/post.interface";
import PostService from "@/services/post.service";

interface Props {
    post: IPost;
}

const PostCard = ({ post }: Props) => {
    const [deleteId, setDeleteId] = useState<null | string>(null);

    const deleteApi = PostService.deletePost();

    const deleteUserPost = () => {
        deleteApi.makeRequest({}, { postId: deleteId! }).then(() => {
            setDeleteId(null);
        });
    };

    return (
        <>
            <AnimatePresence>
                {deleteId && (
                    <ConfirmationModal
                        title="Delete Post!"
                        description="Are you sure you want to proceed with this action?"
                        isSubmitting={deleteApi.isLoading}
                        onCancel={() => {
                            setDeleteId(null);
                        }}
                        onProceed={deleteUserPost}
                    />
                )}
            </AnimatePresence>
            <div className="rounded-lg transition-transform hover:scale-105 duration-500 flex flex-col relative shadow-card h-full bg-white border-line2 border p-4">
                <button
                    onClick={() => {
                        setDeleteId(post.id);
                    }}
                    data-testid="delete-post"
                    className="absolute top-[6px] p-1 rounded hover:bg-red100/10 outline-none right-[6px]"
                >
                    {<TrashIcon className="w-4 h-4 text-red100" />}
                </button>
                <h5 className="text-lg w-[95%] leading-6 font-medium text-primary">
                    {post.title}
                </h5>
                <div className="line-clamp-[7]  sm:line-clamp-[9]">
                    <p className="mt-3 font-normal text-sm ">{post.body}</p>
                </div>
            </div>
        </>
    );
};

export default PostCard;
