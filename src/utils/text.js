//v1.0.190425

/**
 * Ensure a string ends with the specified ending.
 * @param {string} str
 * @param {string} ending
 * @return {string}
 */
export function ensureEnd(str, ending) {
    if (str.endWith(ending)) {
        return str;
    }

    return str + ending;
}