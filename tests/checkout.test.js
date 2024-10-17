const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../page_object/loginPage');
const { InventoryPage } = require('../page_object/inventoryPage');
const { CartPage } = require('../page_object/cartPage');
const { CheckoutPage } = require('../page_object/checkoutPage');

test('Checkout an item successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    // Step 1: Navigate to the website and login
    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');

    // Step 2: Add items to the cart
    await inventoryPage.addItemToCart();
    await inventoryPage.goToCart();

    // Step 3: Verify the correct item is in the cart
    await cartPage.verifyItemInCart();

    // Step 4: Complete the checkout process
    await cartPage.proceedToCheckout();
    await checkoutPage.fillCheckoutDetails('Shihab', 'Z Hasan', '12345');
    await checkoutPage.finishCheckout();

    // Verify the checkout was successful
    await expect(page.locator('.complete-header')).toHaveText('THANK YOU FOR YOUR ORDER');
});
