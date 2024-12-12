"use client";

import Table from "@/components/Table/Table";
import { useURLQuery } from "@/hooks/useURLQuery";
import UserService from "@/services/user.service";
import { useRouter } from "next/navigation";
import React from "react";

const pageSize = 10;

const UsersIndexPage = () => {
    const router = useRouter();
    const { value } = useURLQuery();
    const pageNumber = Math.abs(Number(value?.page ?? "1") - 1);
    const { data, isLoading } = UserService.fetchUsers({
        pageSize,
        pageNumber,
    });
    const userCount = UserService.fetchUsersCount();

    const totalPages = Math.ceil(userCount?.data?.count ?? 1) / 10;

    return (
        <>
            <h1 className="text-[60px] text-header font-medium">Users</h1>

            <div className="mt-5 mb-10">
                <Table
                    tableData={data ?? []}
                    isLoading={isLoading}
                    columns={[
                        {
                            header: "Full Name",
                            view: (row) => row.name,
                            rowStyle: "font-medium",
                        },
                        {
                            header: "Email Address",
                            view: (row) => row.email,
                        },
                        {
                            header: "Address",
                            view: (row) => row?.address ?? "Not Provided",
                        },
                    ]}
                    totalPages={totalPages}
                    clickRowAction={(row) => {
                        router.push(
                            `/${row.id}?name=${row.name}&email=${row.email}`
                        );
                    }}
                />
            </div>
        </>
    );
};

export default UsersIndexPage;
