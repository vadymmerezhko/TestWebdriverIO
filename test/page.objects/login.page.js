import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * Login page class.
 */
export class LoginPage extends Page {

    /**
     * @returns The username input locator.
     */
    get inputUsername () {
        return $('#username')
    }

    /**
     * @returns The password input locator.
     */
    get inputPassword () {
        return $('#password')
    }

    /**
     * @returns The submit button locator.
     */
    get btnSubmit () {
        return $('button[type="submit"]')
    }

    /**
     * Logs in with username and password on Login page.
     * @param {string} username The username.
     * @param {string} password The password.
     */
    async login (username, password) {
        await this.open()
        await this.inputUsername.setValue(username)
        await this.inputPassword.setValue(password)
        await this.btnSubmit.click()
    }

    /**
     * Opens Login page.
     * @returns The Login page object.
     */
    open () {
        return super.open('login')
    }
}


