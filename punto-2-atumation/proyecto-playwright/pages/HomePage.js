class HomePage {
    constructor(page) {
      this.page = page;
      this.searchInput = 'input[name="search"]';
      this.searchBtn = 'button.btn.btn-default.btn-lg';
      this.laptopsMenu = 'a:has-text("Laptops & Notebooks")';
      this.showAllLaptops = 'a:has-text("Show All Laptops & Notebooks")';
    }
  
    async goto() {
      await this.page.goto('https://opencart.abstracta.us/');
    }
  
    async openAllLaptops() {
      await this.page.hover(this.laptopsMenu);
      await this.page.click(this.showAllLaptops);
    }
  
    async search(term) {
      await this.page.fill(this.searchInput, term);
      await this.page.click(this.searchBtn);
    }
  }
  module.exports = { HomePage };
  