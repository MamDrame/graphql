/**
 * The `capitalize` function in JavaScript takes a string as input and returns the same string with the
 * first letter capitalized.
 * @param str - The parameter "str" is a string that you want to capitalize.
 * @returns the input string with the first character capitalized.
 */
export function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function convertXP(bytes) {
  if (bytes >= 1000000) {
    return (bytes / 1000000).toFixed(1) + " MB";
  } else {
    return (bytes / 1000).toFixed() + " KB";
  }
}

export function convertFormatDate(dateISO) {
    const dateObj = new Date(dateISO);
    const jour = dateObj.getDate().toString().padStart(2, '0');
    const mois = (dateObj.getMonth() + 1).toString().padStart(2, '0');
    const annee = dateObj.getFullYear().toString();
    return `${jour}-${mois}-${annee}`;
}