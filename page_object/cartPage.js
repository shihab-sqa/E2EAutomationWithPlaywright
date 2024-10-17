const { expect } = require("@playwright/test");

class CartPage {
    constructor(page) {
        this.page = page;
        this.cartItemName = page.locator('//div[@class="inventory_item_name"]');
        this.checkoutButton = page.locator('//a[normalize-space()="CHECKOUT"]');
    }

    async verifyItemInCart() {
        await  expect  (this.cartItemName).toHaveText("Sauce Labs Backpack");
    }

    async proceedToCheckout() {
        await this.checkoutButton.click();
    }
}

module.exports = { CartPage };
