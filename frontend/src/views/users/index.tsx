"use client";

import Table from "@/components/Table/Table";
// import UserService from "@/services/user.service";
import { useRouter } from "next/navigation";
import React from "react";
const tableData = Array(10).fill("");

const UsersIndexPage = () => {
    const router = useRouter();

    // const { data, isLoading } = UserService.fetchUsers();

    return (
        <>
            <h1 className="text-[60px] text-header font-medium">Users</h1>

            <div className="mt-5 mb-10">
                <Table
                    tableData={tableData}
                    // isLoading={isLoading}
                    columns={[
                        {
                            header: "Full Name",
                            view: () => "James Sunderland",
                            rowStyle: "font-medium",
                        },
                        {
                            header: "Email Address",
                            view: () => "james.sunderland@acme.corp",
                        },
                        {
                            header: "Address",
                            view: () =>
                                "11 Katz St., Pennsylvania, Centralia, M4A2T6 ",
                        },
                    ]}
                    totalPages={20}
                    clickRowAction={() => {
                        router.push(`${1}`);
                    }}
                />
            </div>
        </>
    );
};

export default UsersIndexPage;
