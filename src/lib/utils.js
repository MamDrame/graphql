/**
 * The `capitalize` function in JavaScript takes a string as input and returns the same string with the
 * first letter capitalized.
 * @param str - The parameter "str" is a string that you want to capitalize.
 * @returns the input string with the first character capitalized.
 */
export function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}