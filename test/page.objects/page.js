
import { browser } from '@wdio/globals'
import { Constants } from '../settings/Constants.js'

/**
* Main page object containing all methods, selectors and functionality
* that is shared across all page objects.
*/
export default class Page {

    /**
    * Opens a sub page of the page.
    * @param {string} path The path of the sub page (e.g. /path/to/page.html).
    * @returns The page object.
    */
    open (path) {
        return browser.url(`https://${Constants.HOST_NAME}/${path}`)
    }
}
