import { Page, expect } from '@playwright/test';

class BasePage {
  constructor(page, url) {
    this._page = page;
    this._url = url;
  }

  async open() {
    await this._page.goto(this._url);
  }
}

class LoginPage extends BasePage {
  constructor(page) {
    super(page, "/login");
    this.userNameInput = page.locator('input[name="username"]')
    this.passwordInput = page.locator('input[name="password"]')
    this.loginButton = page.locator('button[type="submit"]')
  }

  async login(username, password) {
    await this.userNameInput.fill( username);
    await this.passwordInput.fill( password);
    await this.loginButton.click();
  }
}