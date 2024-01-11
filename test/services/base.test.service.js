import { UserAccount } from "../entities/user.account.js";

/**
 * Abstract test service base class.
 */
export class BaseTestService {

    /**
     * Abstarct login mentod to be implemented by child class.
     * @param {UserAccount} userAccount The UserAccount object.
     * @throws An error if this method called directly.
     */
    async login(userAccount) {
        throw new Error("Method login() is not implemented.")
    }
}