import React from "react";

const Layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <main className="container mx-auto sm:px-0 px-5 pt-[50px] sm:pt-[130px]">
            <section className="sm:w-[856px] w-full mx-auto">
                {children}
            </section>
        </main>
    );
};

export default Layout;
