/* eslint-disable @typescript-eslint/no-explicit-any */
import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import countries, { ICountry } from "./countries.util";
import { useSingleState } from "@/hooks/useSingleState";
import { useEffect } from "react";

export const cn = (...input: ClassValue[]) => twMerge(clsx(input));

export const flatten = (
    obj: Record<string, any> | Array<Record<string, any>>,
    key = "",
    sep = "."
): Record<string, string> => {
    if (Array.isArray(obj)) {
        const ret = (obj as Record<string, any>).reduce(
            (prev: any, curr: any, index: number) => {
                const newKey = key ? key + sep + index : String(index);
                if (typeof curr === "object") {
                    Object.assign(prev, flatten(curr, newKey, sep));
                } else {
                    prev[newKey] = curr;
                }
                return prev;
            },
            {} as Record<string, any>
        );
        return ret;
    }

    if (typeof obj === "object") {
        return Object.keys(obj).reduce(
            (prev, k) => {
                const newKey = key ? key + sep + k : k;
                if (typeof obj[k] === "object") {
                    Object.assign(prev, flatten(obj[k], newKey, sep));
                } else {
                    prev[newKey] = obj[k];
                }
                return prev;
            },
            {} as Record<string, any>
        );
    }
    return obj;
};

export const cleanNumber = (input: string) => {
    input = input.replace(/[\D ]/g, "");
    if (input.startsWith("0")) {
        input = input.slice(1);
    }
    return input;
};

export const findCountryWithCallingCode = (
    phoneNo: string
): ICountry | undefined => {
    const sortedCountriesByCallingCodeLength = [...countries].sort((a, b) => {
        return b.callingCodes[0].length - a.callingCodes[0].length;
    });
    return sortedCountriesByCallingCodeLength.find((country) =>
        phoneNo.startsWith(country.callingCodes[0])
    );
};

export const useDeferred = () => {
    const functions = useSingleState<Array<() => void>>([]);
    useEffect(() => {
        if (functions.get.length > 0) {
            functions.get.map((f) => {
                f();
            });
            functions.set([]);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [functions.get]);

    return {
        run: (func: () => void | Promise<void>) => {
            functions.set((s) => [...s, func]);
        },
    };
};
