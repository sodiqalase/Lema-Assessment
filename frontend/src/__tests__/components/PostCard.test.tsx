/* eslint-disable react/display-name */
import PostCard from "@/components/UserPost/PostCard";
import { render, screen, fireEvent } from "@testing-library/react";
import { Providers } from "@/app/providers";

interface Props {
    onProceed: () => void;
    onCancel: () => void;
    title: string;
    description: string;
}

const dummyPost = {
    id: "a92683a2abde49b98a08114022924e23",
    user_id: "ee10b0e8346a4a0d990668fd1155fbc2",
    title: "Nemo a quis non provident consequatur.",
    body: "Qui et rerum recusandae qui consequatur. Qui aut placeat nemo sunt in. Rerum dolores ea ad excepturi voluptates. Aut sit quis facere non ex. Quisquam iste omnis accusamus dignissimos numquam. Ipsam aut dolore itaque animi unde. Rem est nulla porro vero tenetur. Ut consequatur quia nam autem officia.",
    created_at: "2024-03-01T13:30:14+02:00",
};

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
        render(
            <Providers>
                <PostCard post={dummyPost} />
            </Providers>
        );

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
        render(
            <Providers>
                <PostCard post={dummyPost} />
            </Providers>
        );

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
