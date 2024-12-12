"use client";

import React, { useState } from "react";
import { TrashIcon } from "@heroicons/react/24/outline";
import { AnimatePresence } from "framer-motion";
import ConfirmationModal from "../Modal/ConfirmationModal";

const PostCard = () => {
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);

    return (
        <>
            <AnimatePresence>
                {showConfirmationModal && (
                    <ConfirmationModal
                        title="Delete Post!"
                        description="Are you sure you want to proceed with this action?"
                        onCancel={() => {
                            setShowConfirmationModal(false);
                        }}
                        onProceed={() => {}}
                    />
                )}
            </AnimatePresence>
            <div className="rounded-lg transition-transform hover:scale-105 duration-500 flex flex-col relative shadow-card h-full bg-white border-line2 border p-4">
                <button
                    onClick={() => {
                        setShowConfirmationModal(true);
                    }}
                    data-testid="delete-post"
                    className="absolute top-[6px] p-1 rounded hover:bg-red100/10 outline-none right-[6px]"
                >
                    <TrashIcon className="w-4 h-4 text-red100" />
                </button>
                <h5 className="text-lg w-[95%] leading-6 font-medium text-primary">
                    How can Anyone Eat Pizza at a Time Like This?
                </h5>
                <div className="line-clamp-[7]  sm:line-clamp-[9]">
                    <p className="mt-3 font-normal text-sm ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit
                    </p>
                </div>
            </div>
        </>
    );
};

export default PostCard;
