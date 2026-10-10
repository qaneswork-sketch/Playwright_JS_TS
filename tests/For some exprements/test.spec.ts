import { test, expect } from '@playwright/test';
import { LoginPage } from './methods.js';

test('Login', async({page})=>{
	const user = {
		username: "John",
		password: "some password"
	}
  const loginPage = new LoginPage(page);
  await loginPage.open();
  await loginPage.login(user.username, user.password);

  // Додаткові кроки тестування на сторінці після входу 
})