export function isValidPositiveInteger(str: string) {
    // Regular expression to match a positive integer without decimal
    const numberRegex = /^\d+$/;

    // Test the string against the regex and return the result
    return numberRegex.test(str);
}
