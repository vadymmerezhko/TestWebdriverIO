import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * Secure page that opens after user gets logged in.
 */
export class SecurePage extends Page {

    /**
     * @returns The flash allert web element locator.
     */
    get flashAlert () {
        return $('#flash');
    }
}

