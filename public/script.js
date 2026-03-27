class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addItem(product, quantity) {
        this.items.push({ product, quantity });
    }

    removeItem(product) {
        this.items = this.items.filter(item => item.product !== product);
    }

    getTotal() {
        return this.items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
    }
}

class ProductManager {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    removeProduct(product) {
        this.products = this.products.filter(p => p !== product);
    }

    listProducts() {
        return this.products;
    }
}