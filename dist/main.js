class TryCatch {
    static handle(callback) {
        try {
            return { success: true, response: callback() };
        }
        catch (error) {
            this.error.push(error.toString());
            return { success: false, response: error.toString() };
        }
    }
    static getErrors() {
        return this.error;
    }
}
TryCatch.error = [];
export default TryCatch;
