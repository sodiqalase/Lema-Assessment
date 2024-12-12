/* eslint-disable import/no-anonymous-default-export */
import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#535862",
                header: "#181D27",
                darkPurple: "#7F56D9",
                lightPurple: "#F9F5FF",
                red100: "#F9566A",
                gray700: "#334155",
                placeholder: "#94A3B8",
                line1: "#E9EAEB",
                line2: "#D5D7DA",
                line3: "#E2E8F0",
            },
            boxShadow: {
                card: "0px 2px 4px -2px #0A0D120F,0px 4px 8px -2px #0A0D121A",
                modal: "0px 4px 8px -3px #0000001A, 1px 10px 20px -5px #00000014",
            },
            fontFamily: { sans: ["var(--font-inter)", ...fontFamily.sans] },
        },
    },
};
