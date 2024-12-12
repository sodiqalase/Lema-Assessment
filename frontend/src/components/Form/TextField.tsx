"use client";
import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import InputLabel from "./InputLabel";
import clsx from "clsx";

interface ITextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    required?: boolean;
    type?: "text" | "number" | "password" | "email" | "tel" | "date" | "time";
    inputClassName?: string;
}

const TextField = ({
    label,
    required = false,
    inputClassName,
    error,
    ...props
}: ITextFieldProps) => {
    const [showPasswordText, setShowPasswordText] = useState(false);
    return (
        <div>
            <div className="flex flex-col relative w-full">
                <InputLabel label={label} required={required} />
                <div className="relative mt-3">
                    <input
                        className={clsx([
                            "block w-full rounded px-4 outline-none text-sm h-10 border border-line3 focus:border-blue-300 bg-white transition-colors duration-500 placeholder:text-placeholder text-primary",
                            inputClassName,
                        ])}
                        {...props}
                        type={
                            props.type === "password" && showPasswordText
                                ? "text"
                                : props.type
                        }
                    />
                    {props.type === "password" && (
                        <button
                            type="button"
                            onClick={() => {
                                setShowPasswordText((prev) => !prev);
                            }}
                            className="absolute top-[17px] right-4"
                        >
                            {showPasswordText ? (
                                <EyeSlashIcon className="h-5 w-5" />
                            ) : (
                                <EyeIcon className="h-5 w-5" />
                            )}
                        </button>
                    )}
                </div>
                {error && (
                    <p className="text-[10px] mt-[2px] text-red-400">{error}</p>
                )}
            </div>
        </div>
    );
};

export default TextField;
