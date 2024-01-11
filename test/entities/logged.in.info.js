/**
 * This class represents data from Secure page after user gets logged in.
 */
export class LoggedInInfo {

    #alertMessage = null

    /**
     * Constaructor.
     * @param {string} alertMassage The alert message text.
     */
    constructor(alertMassage) {
        this.#alertMessage = alertMassage
    }

    /**
     * @returns The alert messge text.
     */
    get alertMassage() {
        return this.#alertMessage
    }

    static Builder = class {

        #alertMessage = null

        setAlertMessage(alertMessage) {
            this.#alertMessage = alertMessage
            return this
        }

        build() {
            return new LoggedInInfo(this.#alertMessage)
        }
    }

    toString() {
        return `LoggedInInfo alertMessage: ${this.#alertMessage}`
    }
}
