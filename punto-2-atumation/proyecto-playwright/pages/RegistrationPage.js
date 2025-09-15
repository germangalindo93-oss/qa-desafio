class RegistrationPage {
  constructor(page) {
    this.page = page;
    this.firstName = '#input-firstname';
    this.lastName = '#input-lastname';
    this.email = '#input-email';
    this.telephone = '#input-telephone';
    this.password = '#input-password';
    this.confirmPassword = '#input-confirm';
    this.privacyPolicy = 'input[name="agree"]';
    this.continueBtn = 'input[value="Continue"]';
    this.successHeading = 'h1';
  }

  async goto() {
    await this.page.goto('https://opencart.abstracta.us/index.php?route=account/register');
  }

  async register(user) {
    await this.page.fill(this.firstName, user.firstName);
    await this.page.fill(this.lastName, user.lastName);
    await this.page.fill(this.email, user.email);
    await this.page.fill(this.telephone, user.telephone);
    await this.page.fill(this.password, user.password);
    await this.page.fill(this.confirmPassword, user.password);
    await this.page.check(this.privacyPolicy);
    await this.page.click(this.continueBtn);
  }

  async expectSuccess(expect) {
    console.log('URL actual:', this.page.url());
    console.log('Todos los párrafos:', await this.page.locator('p').allInnerTexts());
    
    await expect(this.page).toHaveURL(/route=account\/success/);
  
    await expect(
      this.page.locator('div#content p').first()
    ).toContainText('Congratulations! Your new account has been successfully created!');
  }
   
}

module.exports = { RegistrationPage };
