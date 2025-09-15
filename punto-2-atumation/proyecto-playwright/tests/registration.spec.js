const { test, expect } = require('@playwright/test');
const { RegistrationPage } = require('../pages/RegistrationPage');
const { userData } = require('../utils/testData');

test('Registro de usuario', async ({ page }) => {
  const registrationPage = new RegistrationPage(page);
  await registrationPage.goto();
  await registrationPage.register(userData);
  await registrationPage.expectSuccess(expect);
});