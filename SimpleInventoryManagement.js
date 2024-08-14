class Product {
    constructor(id, name, price, quantity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    add(amount) {
        this.quantity = this.quantity + amount;
    }
    remove(amount) {
        if (amount <= this.quantity) {
            this.quantity = this.quantity - amount;
        }
        else {
            console.log("Insufficient Quantity!");
        }
    }
    displayProduct() {
        console.log('ID: ' + this.id + '\nName: ' + this.name + ' | Price: ' + this.price + ' | Quantity: ' + this.quantity);
    }
}

const inventory = [
    new Product(1, 'Laptop', 95000, 15),
    new Product(2, 'Headphone', 15000, 10),
    new Product(3, 'Speaker', 12000, 5)
];

inventory.forEach(product => product.displayProduct());

inventory[1].add(3);
inventory[2].remove(2);

inventory.forEach(product => product.displayProduct());