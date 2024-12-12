"use client";

import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

interface Props {
    onClick?: () => void;
    text: string;
}

const BackButton = ({ onClick, text }: Props) => {
    const router = useRouter();
    return (
        <button
            onClick={() => {
                onClick ? onClick?.() : router.back();
            }}
            className="outline-none flex gap-x-3 items-center"
        >
            <ArrowLeftIcon className="w-5 h-5 text-primary" />
            <span className="font-semibold text-primary text-sm">{text}</span>
        </button>
    );
};

export default BackButton;
