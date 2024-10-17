class InventoryPage {
    constructor(page) {
        this.page = page;
        this.addToCartButton = page.locator('//div[@class="inventory_list"]//div[1]//div[3]//button[1]');
        this.cartIcon = page.locator('.shopping_cart_link');
    }

    async addItemToCart() {
        await this.addToCartButton.first().click(); // Add first item to the cart
    }

    async goToCart() {
        await this.cartIcon.click();
    }
}

module.exports = { InventoryPage };
