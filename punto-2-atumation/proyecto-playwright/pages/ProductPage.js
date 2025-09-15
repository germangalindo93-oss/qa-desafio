class ProductPage {
  constructor(page) {
    this.page = page;
    this.addToCartBtn = '#button-cart';
    this.successAlert = '.alert-success';
  }

  async openByName(name) {
    await this.page.click(`a:has-text("${name}")`);
  }

  async addToCart() {
    await this.page.click(this.addToCartBtn);
  }

  async expectAddedToCart(expect) {
    console.log('URL actual:', this.page.url());
    console.log('HTML parcial:', await this.page.content());

    const successAlert = this.page.locator(this.successAlert);
    await this.page.waitForSelector(this.successAlert, { timeout: 10000 });
    await expect(successAlert).toContainText(/Success/i);
  }
}

module.exports = { ProductPage };
