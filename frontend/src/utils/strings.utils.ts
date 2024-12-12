export const removeNonDigitFromString = (
    inputString: string,
    allowDecimal = false
) => {
    const numberRegex = allowDecimal ? /[^0-9.]/g : /[^0-9]/g;
    return inputString.replace(numberRegex, "");
};
export const generateFetchKey = (url: string) => {
    return `${url}-key`;
};

export const currencyFormat = (
    amount: string | number,
    currency: string = "NGN",
    compact = false,
    minimumFractionDigits = 0
) =>
    Number(amount).toLocaleString("en-NG", {
        style: "currency",
        currency,
        minimumFractionDigits: minimumFractionDigits,
        compactDisplay: "short",
        notation: compact ? "compact" : undefined,
    });

export function removeStyleAttributes(html: string) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    const elementsWithStyle = doc.querySelectorAll("[style]");
    elementsWithStyle.forEach((element) => {
        element.removeAttribute("style");
    });

    return doc.documentElement.innerHTML;
}

export const passwordRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{6,}$/;

export function capitalizeFirstLetter(input: string) {
    return `${input[0].toUpperCase()}${input.slice(1).toLowerCase()}`;
}

export function capitalizeAllLetter(input: string) {
    return `${input?.toUpperCase()}`;
}

export const truncateText = (text: string, maxLength: number = 15): string => {
    if (text.length <= maxLength) {
        return text;
    }
    return `${text.substring(0, maxLength - 3)}...`;
};
