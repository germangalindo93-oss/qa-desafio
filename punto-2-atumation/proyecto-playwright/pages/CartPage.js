class CartPage {
    constructor(page) {
      this.page = page;
      this.cartLink = '#top-links a[title="Shopping Cart"]';
      this.cartTable = '.table-responsive';
    }
  
    async goto() {
      // Ir al carrito desde el top
      await this.page.click(this.cartLink);
      await this.page.waitForSelector(this.cartTable);
    }
  
    async removeItemByName(name) {
      const row = this.page.locator('table tbody tr', { hasText: name });
      await row.locator('button[data-original-title="Remove"]').click();
    }
  
    async changeQuantityByName(name, qty) {
      const row = this.page.locator('table tbody tr', { hasText: name });
      await row.locator('input[name*="quantity"]').fill(String(qty));
      await row.locator('button[data-original-title="Update"]').click();
    }
  }
  module.exports = { CartPage };
  