const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { ProductPage } = require('../pages/ProductPage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutPage } = require('../pages/CheckoutPage');

test('Flujo parcial: navegar, agregar producto y abrir checkout', async ({ page }) => {
  const home = new HomePage(page);
  const product = new ProductPage(page);
  const cart = new CartPage(page);
  const checkout = new CheckoutPage(page);

  await home.goto();
  await home.openAllLaptops();
  await product.openByName('MacBook Pro');
  await product.addToCart();

  await cart.goto();
  await checkout.startFromCart();

  await checkout.completeCheckout(expect);
});
