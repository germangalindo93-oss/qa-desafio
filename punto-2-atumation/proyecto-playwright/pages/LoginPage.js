class LoginPage {
    constructor(page) {
      this.page = page;
      this.email = '#input-email';
      this.password = '#input-password';
      this.loginBtn = 'input[value="Login"]';
      this.accountHeading = '#content h2';
    }
  
    async goto() {
      await this.page.goto('https://opencart.abstracta.us/index.php?route=account/login');
    }
  
    async login(email, password) {
      await this.page.fill(this.email, email);
      await this.page.fill(this.password, password);
      await this.page.click(this.loginBtn);
    }
  
    async expectLoggedIn(expect) {
      await expect(
        this.page.getByRole('heading', { name: 'My Account', level: 2 })
      ).toBeVisible();
    }
  }
  module.exports = { LoginPage };
  