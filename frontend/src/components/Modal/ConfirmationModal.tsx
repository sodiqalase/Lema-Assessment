import Button from "../Button/Button";
import ModalShell from "./ModalShell";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

interface Props {
    onProceed: () => void;
    onCancel: () => void;
    title: string;
    description: string;
    isSubmitting: boolean;
}

const ConfirmationModal = ({
    onCancel,
    onProceed,
    title,
    description,
    isSubmitting,
}: Props) => {
    return (
        <ModalShell preventClose onClose={onCancel}>
            <section className="sm:w-[400px] w-full">
                <div className="p-5 text-center">
                    <ExclamationTriangleIcon className="w-12 h-12 mx-auto block text-red100 mb-2" />
                    <h6 className="font-semibold text-[24px] text-red100">
                        {title}
                    </h6>
                    <p className="my-3 text-primary">{description}</p>
                </div>

                <div className="border-t border-line3 flex justify-end p-5">
                    <div className="flex items-center gap-x-3">
                        <Button onClick={onCancel} variant="secondary">
                            No
                        </Button>
                        <Button loading={isSubmitting} onClick={onProceed}>
                            Yes
                        </Button>
                    </div>
                </div>
            </section>
        </ModalShell>
    );
};

export default ConfirmationModal;
