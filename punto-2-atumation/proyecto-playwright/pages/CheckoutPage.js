class CheckoutPage {
    constructor(page) {
      this.page = page;
      this.checkoutLink = 'a:has-text("Checkout")';
    }
  
    async startFromCart() {
      await this.page.click(this.checkoutLink);
      await this.page.waitForLoadState('domcontentloaded');
    }
  
    async completeCheckout(expect) {
      await expect(
        this.page.getByRole('heading', { name: 'Checkout', level: 1 })
      ).toBeVisible();
    }
  }
  module.exports = { CheckoutPage };
  