/* eslint-disable react/display-name */
import PostCard from "@/components/UserPost/PostCard";
import { render, screen, fireEvent } from "@testing-library/react";

interface Props {
    onProceed: () => void;
    onCancel: () => void;
    title: string;
    description: string;
}

// Mock the ConfirmationModal component
jest.mock("../../components/Modal/ConfirmationModal", () => {
    return ({ title, description, onCancel, onProceed }: Props) => (
        <div data-testid="confirmation-modal">
            <h2>{title}</h2>
            <p>{description}</p>
            <button onClick={onCancel}>Cancel</button>
            <button onClick={onProceed}>Proceed</button>
        </div>
    );
});

describe("PostCard", () => {
    it("should display the confirmation modal when the delete button is clicked", () => {
        render(<PostCard />);

        // Check that the modal is not in the document initially
        expect(screen.queryByTestId("confirmation-modal")).toBeNull();

        // Simulate clicking the delete button
        fireEvent.click(screen.getByTestId("delete-post"));

        // Check that the modal is now visible
        expect(screen.getByTestId("confirmation-modal")).toBeInTheDocument();
        expect(screen.getByText("Delete Post!")).toBeInTheDocument();
        expect(
            screen.getByText(
                "Are you sure you want to proceed with this action?"
            )
        ).toBeInTheDocument();
    });

    it("should close the modal when cancel button is clicked", () => {
        render(<PostCard />);

        // Open the modal by clicking the delete button
        fireEvent.click(screen.getByTestId("delete-post"));

        // Check that the modal appears
        const modal = screen.getByTestId("confirmation-modal");
        expect(modal).toBeInTheDocument();

        // Click the cancel button
        fireEvent.click(screen.getByText("Cancel"));

        // Check that the modal is no longer in the document
        expect(modal).not.toBeInTheDocument();
    });
});
