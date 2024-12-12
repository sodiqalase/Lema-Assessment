"use client";

import React from "react";
import clsx from "clsx";
import Image from "next/image";

import Pagination from "./Pagination";
import emptyFolder from "../../assets/icons/empty-folder.png";
import Loader from "../Loader";

interface ITableProps<TRow> {
    totalPages?: number;
    isLoading?: boolean;
    clickRowAction?: (row: TRow, index: number) => void;
    tableData?: TRow[];
    columns: Array<{
        header: React.ReactNode;
        view: (row: TRow, index: number) => React.ReactNode;
        rowStyle?: string;
    }>;
}

export default function Table<TRow>({
    isLoading = false,
    tableData = [],
    clickRowAction,
    columns = [],
    totalPages = 1,
}: ITableProps<TRow>) {
    return (
        <div className="h-auto min-h-[332px]">
            <div className="border border-line1 maw-w-full overflow-x-scroll rounded-lg overflow-y-hidden mb-6">
                <table className="table table-auto min-w-full border-collapse">
                    <thead className="bg-white">
                        <tr>
                            {columns.map((col) => (
                                <th
                                    key={`${col.header}-head`}
                                    className={clsx(
                                        "text-primary font-medium text-xs leading-normal px-3 sm:px-5 py-5 whitespace-nowrap text-left"
                                    )}
                                >
                                    <span className="w-full block">
                                        {col.header}
                                    </span>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {renderTableBody({
                            isLoading,
                            tableData,
                            columns,
                            clickRowAction,
                        })}
                    </tbody>
                </table>
            </div>
            <Pagination totalPages={totalPages} />
        </div>
    );
}

function renderTableBody<TRow>({
    isLoading,
    tableData,
    columns,
    clickRowAction,
}: {
    isLoading: boolean;
    tableData: TRow[];
    columns: ITableProps<TRow>["columns"];
    clickRowAction?: (row: TRow, index: number) => void;
}) {
    if (isLoading) {
        return renderLoader(columns.length);
    }

    if (tableData.length === 0) {
        return (
            <tr>
                <td colSpan={columns.length}>
                    <div className="flex items-center justify-center w-full h-[30vh]">
                        <div className="flex flex-col items-center gap-y-3">
                            <Image
                                src={emptyFolder}
                                className="w-10"
                                width={40}
                                height={40}
                                alt="empty-state"
                            />
                            <p className="text-primary text-xs font-medium">
                                No data available.
                            </p>
                        </div>
                    </div>
                </td>
            </tr>
        );
    }

    return tableData.map((row, rowIndex) => (
        <tr
            key={`table-body-row${rowIndex}`}
            className={clsx(
                "px-3 sm:px-5 bg-white border-0 border-b border-line1 last:border-0",
                clickRowAction && "cursor-pointer"
            )}
            onClick={() => clickRowAction?.(row, rowIndex)}
        >
            {columns.map((col) => (
                <td
                    key={`table-body-cell${col.header}`}
                    className={clsx(
                        "px-3 sm:px-5 cursor-pointer py-5 whitespace-nowrap text-primary text-left",
                        col.rowStyle || "font-normal"
                    )}
                >
                    <span className="w-full text-sm leading-normal block">
                        {col.view(row, rowIndex)}
                    </span>
                </td>
            ))}
        </tr>
    ));
}

function renderLoader(colSpan: number) {
    return (
        <tr>
            <td colSpan={colSpan}>
                <div className="flex items-center justify-center w-full h-[30vh]">
                    <div className="flex justify-center items-center">
                        <Loader />
                    </div>
                </div>
            </td>
        </tr>
    );
}
