const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { userData } = require('../utils/testData');

test('Inicio de sesión con usuario existente', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(userData.email, userData.password);
  await loginPage.expectLoggedIn(expect);
});
