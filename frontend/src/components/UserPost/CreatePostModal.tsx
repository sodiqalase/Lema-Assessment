import React from "react";
import ModalShell from "../Modal/ModalShell";
import TextField from "../Form/TextField";
import TextAreaField from "../Form/TextAreaField";
import Button from "../Button/Button";
import { object, string } from "yup";
import { useFormik } from "formik";
import { evaluateFormikError } from "@/utils/formik.util";

export const schema = object({
    title: string().required().trim().label("Title"),
    body: string().required().trim().label("Body"),
});

interface Props {
    onClose: () => void;
}

const CreatePostModal = ({ onClose }: Props) => {
    const form = useFormik({
        initialValues: {
            title: "",
            body: "",
        },
        validateOnMount: true,
        enableReinitialize: false,
        validationSchema: schema,
        onSubmit: () => {},
    });

    const { isValid, errors, handleSubmit, touched, getFieldProps } = form;

    return (
        <ModalShell preventClose onClose={onClose}>
            <form
                onSubmit={handleSubmit}
                className="flex sm:w-[679px] w-full flex-col gap-y-5"
            >
                <h5 className="text-header text-[36px] font-medium">
                    New Post
                </h5>
                <TextField
                    {...getFieldProps(`title`)}
                    error={evaluateFormikError(errors, touched, "title")}
                    label="Post title"
                    placeholder="Give your post a title"
                />
                <TextAreaField
                    {...getFieldProps(`body`)}
                    error={evaluateFormikError(errors, touched, "body")}
                    label="Post content"
                    placeholder="Write something mind-blowing"
                />
                <div className="flex justify-end">
                    <div className="flex items-center gap-x-4">
                        <Button onClick={onClose} variant="secondary">
                            Cancel
                        </Button>
                        <Button disabled={!isValid}>Publish</Button>
                    </div>
                </div>
            </form>
        </ModalShell>
    );
};

export default CreatePostModal;
