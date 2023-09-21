/**
 * Utility class for handling try-catch operations.
 */
export default class TryCatch {

    private static error: any[] = [];

    /**
     * Handles a callback function within a try-catch block.
     *
     * @template T - The type of the response.
     * @param {Function} callback - The callback function to be executed.
     * @returns {Object} - An object containing success status and response.
     * @property {boolean} success - Indicates whether the operation was successful.
     * @property {T | string} response - The response or error message.
     */
    public static handle<T>(callback: () => T): { success: boolean; response: T | string } {
        try {
            return { success: true, response: callback() };
        } catch (error: any) {
            this.error.push(error.toString());
            return { success: false, response: error.toString() };
        }
    }

    public static getErrors(): any[] {
        return this.error;
    }
}
