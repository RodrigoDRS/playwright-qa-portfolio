import { faker } from '@faker-js/faker'

export function createUser() {
    const firstName = faker.person.firstName().toLowerCase()
    const lastName = faker.person.lastName().toLowerCase()

    return {
        userName: `${firstName}-${lastName}`,
        password: 'Password123!'
    }
}

export function createInvalidUser() {
    const firstName = faker.person.firstName().toLowerCase()
    const lastName = faker.person.lastName().toLowerCase()
    const upperCaseName = faker.person.firstName()

    return {
        userNameWithSpaces: `${firstName} ${lastName}`,
        userNameWithUpperCase: upperCaseName,
        userNameWithSpecialChars: `${firstName}@${lastName}`,
        userNameEndingWithHifen: `${firstName}${lastName}-`,
        userNameStartingWithHifen: `-${firstName}${lastName}`,
        userNameShorterThanMinimum: 'ab',
        password: 'Password123!'
    }
}