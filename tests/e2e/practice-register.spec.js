import { test } from '../support'
import { createUser } from '../support/factories/userFactory'
import { blockExternalRequests } from '../support/helpers/blockExternalRequests'
import { invalidUsers, invalidUsersWithUppercase } from '../support/fixtures/invalidUsers'

test.beforeEach(async ({ page }) => {
    await blockExternalRequests(page)
})

test('Test Case 1: Successful Registration (Happy Path)', async ({ page }) => {
  const user = createUser()
  await page.register.visit()
  await page.register.submitRegisterForm(user.userName, user.password, user.password)
  await page.alert.havetext('Successfully registered, you can log in now.')
  await page.verifypage.verifyActualPage('login')

})

test('Test Case 2: Registration with Missing Username', async ({ page }) => {
  const user = createUser()
  await page.register.visit()
  await page.register.submitRegisterForm('', user.password, user.password)
  await page.alert.havetext('All fields are required.')
  await page.verifypage.verifyActualPage('register')

})

test('Test Case 3: Registration with Missing Password', async ({ page }) => {
  const user = createUser()
  await page.register.visit()
  await page.register.submitRegisterForm(user.userName, '', '')
  await page.alert.havetext('All fields are required.')
  await page.verifypage.verifyActualPage('register')

})

test('Test Case 4: Registration with Non-matching Passwords', async ({ page }) => {
  const user = createUser()

  await page.register.visit()
  await page.register.submitRegisterForm(user.userName, user.password, 'DifferentPassword123!')
  await page.alert.havetext('Passwords do not match.')
  await page.verifypage.verifyActualPage('register')

})

test('Test Case 5: Registration with Existing Username', async ({ page, request }) => {
  const user = createUser()  
  await request.api.registerUser(user.userName, user.password) // Pre-register the user via API

  await page.register.visit()
  await page.register.submitRegisterForm(user.userName, user.password, user.password)
  await page.alert.havetext('An error occurred during registration. Please try again.')
  await page.verifypage.verifyActualPage('register')

})

//testing multiple invalid username scenarios using test.each
invalidUsers.forEach(({ scenario, userName, password, expectedAlert }) => {
  test(`Test Case 6: Invalid Username (${scenario})`, async ({ page }) => {

    await page.register.visit()
    await page.register.submitRegisterForm(userName, password, password)
    await page.alert.havetext(expectedAlert)
    await page.verifypage.verifyActualPage('register')

  })
})

//the system is registering users with uppercase, so the first time it registers and the secont time it occurs the other error, so it is marked as known bug
test.fail('Known Bug - Username with Uppercase Letters', async ({ page }) => {
  const { userName, password, expectedAlert } = invalidUsersWithUppercase

  await page.register.visit()
  await page.register.submitRegisterForm(userName, password, password)
  await page.alert.havetext(expectedAlert)
  await page.verifypage.verifyActualPage('register')

})