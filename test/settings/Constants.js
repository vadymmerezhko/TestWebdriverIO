
export class Constants {

    static HOST_NAME = 'the-internet.herokuapp.com'

    static VALID_USER_NAME = process.env.DEMO_USER_ACCOUNT_USERNAME //'tomsmith'
    static VALID_PASSWORD = process.env.DEMO_USER_ACCOUNT_PASSWORD //'SuperSecretPassword!'

    static INVALID_USER_NAME = 'InvalidUsername'
    static INVALID_PASSWORD = 'InvalidPassword'

    static LOGGED_IN_ALERT_MESSAGE = 'You logged into a secure area!'
    static INVALID_USER_NAME_ALERT_MESSAGE = 'Your username is invalid!'
}