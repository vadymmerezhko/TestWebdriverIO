import { LoginPage } from '../page.objects/login.page.js'
import { LoggedInInfo } from '../entities/logged.in.info.js';
import { SecurePage } from '../page.objects/secure.page.js'
import { BaseTestService } from './base.test.service.js';
import { UserAccount } from '../entities/user.account.js';

/**
 * Web test service calss.
 */
export class WebTestService extends BaseTestService {

    /**
     * Login method implementetion for web.
     * @param {UserAccount} userAccount The UserAccount object.
     * @returns The LoggedInInfo object.
     */
    async login(userAccount) {
        const loginPage = new LoginPage()
        await loginPage.login(userAccount.username, userAccount.password)

        const securePage = new SecurePage()
        const flashAlert = await securePage.flashAlert
        const alertText = await flashAlert.getText()

        const loggedInInfo = new LoggedInInfo.Builder()
                                    .setAlertMessage(this.parseAlertMessage(alertText))
                                    .build()
        return loggedInInfo
    }

    /**
     * Parses allert text - returns the first row from whole flash allert web elemnt text (workaround).
     * @param {string} alertText The whole flash alert text.
     * @returns The first row of the whole f;ash alert text.
     */
    parseAlertMessage(alertText) {
        return alertText.split('\n')[0]
    }
}
