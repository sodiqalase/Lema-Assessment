import React, { useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import CreatePostModal from "./CreatePostModal";
import { AnimatePresence } from "framer-motion";

const NewPostTrigger = () => {
    const [showCreateModal, setShowCreateModal] = useState(false);
    return (
        <>
            <AnimatePresence>
                {showCreateModal && (
                    <CreatePostModal
                        onClose={() => {
                            setShowCreateModal(false);
                        }}
                    />
                )}
            </AnimatePresence>
            <button
                onClick={() => {
                    setShowCreateModal(true);
                }}
                className="outline-none flex items-center justify-center rounded-lg border-line2 border-dashed border"
            >
                <div className="flex flex-col items-center">
                    <PlusCircleIcon className="w-5 h-5 text-primary" />
                    <p className="text-primary font-medium">New Post</p>
                </div>
            </button>
        </>
    );
};

export default NewPostTrigger;
