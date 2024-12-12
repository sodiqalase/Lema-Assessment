// __tests__/components/Button.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "@/components/Button/Button";

// Mocking Loader component

describe("Button Component", () => {
    it("renders a button with text", () => {
        render(<Button>Click Me</Button>);
        expect(screen.getByText("Click Me")).toBeInTheDocument();
    });

    it("renders a button with icon on the left", () => {
        render(
            <Button icon="test-icon" iconPosition="left">
                Click Me
            </Button>
        );
        expect(screen.getByAltText("test-icon")).toBeInTheDocument();
        expect(screen.getByText("Click Me")).toBeInTheDocument();
    });

    it("renders a button with icon on the right", () => {
        render(
            <Button icon="test-icon" iconPosition="right">
                Click Me
            </Button>
        );
        expect(screen.getByAltText("test-icon")).toBeInTheDocument();
        expect(screen.getByText("Click Me")).toBeInTheDocument();
    });

    it("applies the correct classes based on props", () => {
        render(
            <Button fullWidth={true} variant="primary" buttonSize="medium">
                Click Me
            </Button>
        );
        const button = screen.getByText("Click Me");
        expect(button).toHaveClass("w-full"); // Full width class
        expect(button).toHaveClass("bg-gray700"); // Primary button variant class
        expect(button).toHaveClass("px-5"); // Medium button size class
    });

    it('disables the button when "disabled" prop is passed', () => {
        render(<Button disabled>Click Me</Button>);
        const button = screen.getByText("Click Me");
        expect(button).toBeDisabled();
    });

    it('renders a Next.js Link when "renderAs" is "next_link"', () => {
        render(
            <Button renderAs="next_link" href="/test">
                Next Link
            </Button>
        );
        const link = screen.getByText("Next Link");
        expect(link.closest("a")).toHaveAttribute("href", "/test");
    });

    it('renders an external link when "renderAs" is "external_link"', () => {
        render(
            <Button renderAs="external_link" href="https://external.com" newTab>
                External Link
            </Button>
        );
        const link = screen.getByText("External Link");
        expect(link.closest("a")).toHaveAttribute(
            "href",
            "https://external.com"
        );
        expect(link.closest("a")).toHaveAttribute("target", "_blank");
    });

    it("fires onClick event when button is clicked", () => {
        const onClickMock = jest.fn();
        render(<Button onClick={onClickMock}>Click Me</Button>);
        fireEvent.click(screen.getByText("Click Me"));
        expect(onClickMock).toHaveBeenCalledTimes(1);
    });
});
