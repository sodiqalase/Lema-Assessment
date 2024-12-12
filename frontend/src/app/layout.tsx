import type { Metadata } from "next";
import "../styles/tailwind.scss";
import "../styles/index.scss";
import { Toaster } from "react-hot-toast";
import { Providers } from "./providers";

import { Inter } from "next/font/google";

const interFont = Inter({
    weight: ["100", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-inter",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Lema",
    description: "Lema",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${interFont.variable} w-screen min-h-screen max-w-[100vw] bg-white font-sans`}
            >
                <Providers>
                    <Toaster position="top-center" />
                    {children}
                </Providers>
            </body>
        </html>
    );
}
