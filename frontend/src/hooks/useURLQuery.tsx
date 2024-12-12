/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

export const useURLQuery = <T extends Record<string, string | null>>(
    effectFn?: (data: T) => void
) => {
    const search = useSearchParams()?.toString();
    const router = useRouter();
    const pathname = usePathname();

    const query = useMemo(() => {
        const url = new URLSearchParams(search);
        // convert url to object
        const q = Array.from(url.keys()).reduce<T>((acc, cur) => {
            return { ...acc, [cur]: url.get(cur) };
        }, {} as T);
        return q;
    }, [search]);

    useEffect(() => {
        effectFn?.(query);
    }, [search, query]);

    return {
        value: query as Partial<T>,
        setURLQuery: (
            queries: Partial<T>, // Record<string, string | null>,
            clearAll: boolean = false
        ) => {
            const url = new URLSearchParams(clearAll ? "" : search);
            Object.keys(queries).forEach((key) => {
                const value = queries[key];
                if (value !== null) {
                    url.set(key, String(value));
                } else if (url.has(key)) {
                    url.delete(key);
                }
            });
            router.replace(`${pathname}?${url.toString()}`);
        },
    };
};
