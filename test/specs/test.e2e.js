import { expect } from '@wdio/globals'
import { createTestService } from '../services/test.service.factory.js'

import { Constants } from '../settings/Constants.js'
import { LoggedInInfo } from '../entities/logged.in.info.js'
import { TestServiceTypes } from '../services/test.service.types.js'
import { UserAccount } from '../entities/user.account.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await loginTest(Constants.VALID_USER_NAME, Constants.VALID_PASSWORD, Constants.LOGGED_IN_ALERT_MESSAGE)
    })

    it('should not login with invvalid credentials', async () => {
        await loginTest(Constants.INVALID_USER_NAME, Constants.INVALID_PASSWORD, Constants.INVALID_USER_NAME_ALERT_MESSAGE)
    })
})

async function loginTest(username, password, alertMassage) {

    const userAccount = new UserAccount.Builder()
                                    .setUsername(username)
                                    .setPassword(password)
                                    .build()

    const expectedLoggedInInfo = new LoggedInInfo.Builder()
                                    .setAlertMessage(alertMassage)
                                    .build();

    const webTestService =createTestService(TestServiceTypes.web)
    const actualLoggedInInfo = await webTestService.login(userAccount)

    expect(actualLoggedInInfo.toString()).toStrictEqual(expectedLoggedInInfo.toString())
}
