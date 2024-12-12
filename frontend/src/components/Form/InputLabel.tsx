const InputLabel = (props: { label?: string; required?: boolean }) => {
    const { label, required } = props;
    return label ? (
        <label className="text-lg font-medium block text-primary">
            <span>
                {label}{" "}
                {required ? <span className="text-red-500">*</span> : null}
            </span>
        </label>
    ) : null;
};

export default InputLabel;
