"use client";
import React from "react";
import InputLabel from "./InputLabel";
import clsx from "clsx";

interface ITextAreaProps
    extends React.InputHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
    required?: boolean;
    inputClassName?: string;
    rows?: number;
}

const TextAreaField = ({
    label,
    required = false,
    inputClassName,
    error,
    rows = 5,
    ...props
}: ITextAreaProps) => {
    return (
        <div>
            <div className="flex flex-col relative w-full">
                <InputLabel label={label} required={required} />
                <div className="relative mt-3">
                    <textarea
                        className={clsx([
                            "block w-full rounded p-4 outline-none text-sm min-h-10 border border-line3 focus:border-blue-300 bg-white transition-colors duration-500 placeholder:text-placeholder text-primary",
                            inputClassName,
                        ])}
                        {...props}
                        rows={rows}
                    />
                </div>
                {error && (
                    <p className="text-[10px] mt-[2px] text-red-400">{error}</p>
                )}
            </div>
        </div>
    );
};

export default TextAreaField;
