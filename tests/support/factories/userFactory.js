import { faker } from '@faker-js/faker'

export function createUser() {
    const firstName = faker.person.firstName().toLowerCase()
    const lastName = faker.person.lastName().toLowerCase()

    return {
        userName: `${firstName}-${lastName}`,
        password: 'Password123!'
    }
}