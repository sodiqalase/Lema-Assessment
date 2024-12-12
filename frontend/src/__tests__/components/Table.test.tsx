/* eslint-disable react/display-name */

import Table from "@/components/Table/Table";
import { render, screen, fireEvent } from "@testing-library/react";

// Mock dependencies
jest.mock("../../components/Loader", () => () => <div>Loading...</div>);
jest.mock("../../components/Table/Pagination", () => () => (
    <div>Pagination</div>
));

type TableRow = {
    name: string;
    age: number;
};

describe("Table component", () => {
    const columns = [
        { header: "Name", view: (row: TableRow) => row.name },
        { header: "Age", view: (row: TableRow) => row.age },
    ];

    it("should render loading state when isLoading is true", () => {
        render(<Table isLoading={true} columns={columns} />);

        // Ensure loader is shown
        expect(screen.getByText("Loading...")).toBeInTheDocument();
        expect(screen.queryByText("No data available.")).toBeNull();
    });

    it("should render empty state when tableData is empty", () => {
        render(<Table isLoading={false} columns={columns} tableData={[]} />);

        // Ensure empty folder image is shown
        expect(screen.getByAltText("empty-state")).toBeInTheDocument();
        expect(screen.getByText("No data available.")).toBeInTheDocument();
    });

    it("should render table data when tableData is provided", () => {
        const tableData = [
            { name: "John", age: 30 },
            { name: "Jane", age: 25 },
        ];

        render(
            <Table isLoading={false} columns={columns} tableData={tableData} />
        );

        // Ensure table rows are rendered
        expect(screen.getByText("John")).toBeInTheDocument();
        expect(screen.getByText("Jane")).toBeInTheDocument();
    });

    it("should call clickRowAction when a row is clicked", () => {
        const tableData = [
            { name: "John", age: 30 },
            { name: "Jane", age: 25 },
        ];

        const clickRowAction = jest.fn();
        render(
            <Table
                isLoading={false}
                columns={columns}
                tableData={tableData}
                clickRowAction={clickRowAction}
            />
        );

        const row = screen.getByText("John").closest("tr");
        fireEvent.click(row!);

        expect(clickRowAction).toHaveBeenCalledTimes(1);
        expect(clickRowAction).toHaveBeenCalledWith(tableData[0], 0);
    });

    it("should render pagination component", () => {
        render(<Table isLoading={false} columns={columns} totalPages={5} />);

        // Ensure pagination is rendered
        expect(screen.getByText("Pagination")).toBeInTheDocument();
    });
});
