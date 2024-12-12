/* eslint-disable @typescript-eslint/no-explicit-any */

export const evaluateFormikError = (
    errors: any,
    touched: any,
    name: string
) => {
    //this takes care of both direct object field and one level of nesting i.e "contact.phoneNumber"
    const [firstKey, secondKey] = name.split(".");

    if (secondKey) {
        if (
            touched?.[firstKey]?.[secondKey] &&
            errors?.[firstKey]?.[secondKey]
        ) {
            return errors[firstKey][secondKey];
        }
    } else {
        if (touched?.[name] && errors?.[name]) {
            return errors[name];
        }
    }

    return "";
};
