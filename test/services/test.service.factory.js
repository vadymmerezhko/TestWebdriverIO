import { TestServiceTypes } from "./test.service.types.js"
import { WebTestService } from "./web.test.service.js"

/**
 * Creates test service by its type.
 * @param {string} type The test service type.
 * @returns The BaseTestService object.
 * @throws An error if the service type is not supported or invalid.
 */
export function createTestService(type) {

    switch (type) {
        case TestServiceTypes.web:
            return new WebTestService()
        default:
            throw new Error(`Unsupported test service type: ${type}.`)
    }
}
