const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const { InventoryPage } = require('../pages/inventoryPage');
const { CartPage } = require('../pages/cartPage');
const { CheckoutPage } = require('../pages/checkoutPage');

Given('I navigate to the Sauce Demo login page', async function () {
    const loginPage = new LoginPage(this.page);
    await loginPage.navigate();
});

When('I log in with {string} and {string}', async function (username, password) {
    const loginPage = new LoginPage(this.page);
    await loginPage.login(username, password);
});

When('I add an item to the cart', async function () {
    const inventoryPage = new InventoryPage(this.page);
    await inventoryPage.addItemToCart();
    await inventoryPage.goToCart();
});

Then('I should see the item in the cart', async function () {
    const cartPage = new CartPage(this.page);
    await cartPage.verifyItemInCart();
});

When('I proceed to checkout and complete the process', async function () {
    const cartPage = new CartPage(this.page);
    const checkoutPage = new CheckoutPage(this.page);
    await cartPage.proceedToCheckout();
    await checkoutPage.fillCheckoutDetails('John', 'Doe', '12345');
    await checkoutPage.finishCheckout();
});

Then('I should see a confirmation message', async function () {
    await expect(this.page.locator('.complete-header')).toHaveText('THANK YOU FOR YOUR ORDER');
});
