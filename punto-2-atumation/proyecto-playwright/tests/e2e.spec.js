const { test, expect } = require('@playwright/test');
const { RegistrationPage } = require('../pages/RegistrationPage');
const { LoginPage } = require('../pages/LoginPage');
const { HomePage } = require('../pages/HomePage');
const { ProductPage } = require('../pages/ProductPage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutPage } = require('../pages/CheckoutPage');
const { userData } = require('../utils/testData');

test('Flujo E2E: registro, login, compra y checkout', async ({ page }) => {
  // 1️ Registro de usuario
  const registrationPage = new RegistrationPage(page);
  await registrationPage.goto();
  await registrationPage.register(userData);
  await registrationPage.expectSuccess(expect); // Validar aquí mismo

  // 2️ Cerrar sesión para probar login
  await page.goto('https://opencart.abstracta.us/index.php?route=account/logout');

  // 3️ Login con el usuario recién creado
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(userData.email, userData.password);
  await loginPage.expectLoggedIn(expect);

  // 4️ Ir a Laptops & Notebooks → Show All
  const home = new HomePage(page);
  await home.goto();
  await home.openAllLaptops();

  // 5️ Agregar MacBook Pro al carrito
  const product = new ProductPage(page);
  await product.openByName('MacBook Pro');
  await product.addToCart();
  await product.expectAddedToCart(expect);

  // 6️ Buscar Samsung Galaxy Tab y agregarla
  await home.goto();
  await home.search('Samsung Galaxy Tab 10.1');
  await product.openByName('Samsung Galaxy Tab 10.1');
  await product.addToCart();
  await product.expectAddedToCart(expect);

  // 7️ Ir al carrito y eliminar MacBook Pro
  const cart = new CartPage(page);
  await cart.goto();
  await cart.removeItemByName('MacBook Pro');

  // 8️ Aumentar cantidad de Samsung Galaxy Tab a 2
  await cart.changeQuantityByName('Samsung Galaxy Tab 10.1', 2);

  // 9️ Iniciar checkout
  const checkout = new CheckoutPage(page);
  await checkout.startFromCart();
  await checkout.completeCheckout(expect);
});
