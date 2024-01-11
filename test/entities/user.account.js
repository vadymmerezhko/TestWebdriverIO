/**
 * This class represents User Account information.
 */
export class UserAccount {
    
    #username = null
    #password = null

    /**
     * Constructor
     * @param {string} username The username value.
     * @param {string} password The password value.
     */
    constructor (username, password) {
        this.#username = username
        this.#password = password
    }
    
    /**
     * @returns The username valur.
     */
    get username() {
        return this.#username;
    }

    /**
     * @returns The password value.
     */
    get password() {
        return this.#password;
    }

    static Builder = class {
        #username = null
        #password = null

        setUsername(username) {
            this.#username = username
            return this;
        }

        setPassword(password) {
            this.#password = password
            return this;
        }

        build() {
            return new UserAccount(this.#username, this.#password)
        }
    }

    toString() {
        return `UserAccount username: ${this.#username}
        password: ${this.#password}`
    }
}