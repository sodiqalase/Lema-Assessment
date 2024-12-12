import { XMarkIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { motion } from "framer-motion";

interface ModalProp {
    children: React.ReactNode;
    onClose: () => void;
    allowBackdropClose?: boolean;
    extraClassname?: string;
    preventClose?: boolean;
    childExtraClassname?: string;
}

const ModalShell = ({
    children,
    onClose,
    extraClassname,
    preventClose,
    allowBackdropClose = true,
    childExtraClassname,
}: ModalProp) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={clsx(
                "h-screen w-[100%]",
                "fixed top-0 left-0 z-50 bg-[#00000090] flex justify-center mb-20 overflow-y-auto backdrop-blur-sm"
            )}
            onClick={allowBackdropClose ? onClose : undefined}
        >
            <motion.div
                initial={{ top: "100vh" }}
                animate={{ top: "20%" }}
                exit={{ top: "-100vh" }}
                className="absolute sm:px-0 px-5 top-[20%] mx-auto pb-20"
                onClick={(e) => e.stopPropagation()}
            >
                <div
                    className={`bg-white relative shadow-modal rounded-lg sm:min-w-[395px] sm:w-auto w-[90vw] min-w-full ${extraClassname}`}
                >
                    {!preventClose && (
                        <div>
                            <button
                                className="ml-5 mt-5 w-auto inline-block"
                                onClick={() => onClose()}
                                type="button"
                            >
                                <XMarkIcon className="h-5 text- w-5" />
                            </button>
                        </div>
                    )}

                    <div className={`p-5 ${childExtraClassname}`}>
                        {children}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ModalShell;
