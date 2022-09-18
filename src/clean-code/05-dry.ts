type Size = '' | 'S' | 'M' | 'L' | 'XL';

class Product {
    constructor(
        public name: string = '',
        public price: number = 0,
        public size: Size = ''
    ) {}

    public toString() {
        if (!this.name) throw new Error('Name is empty');
        if (this.price <= 0) throw new Error('Price must be greater than zero');
        if (!this.size) throw new Error('Size is empty');

        return `${this.name} (${this.price}), ${this.size}`;
    }
}

(() => {
    const bluePants = new Product('Blue Large Pants', 10, 'S');

    console.log(bluePants.toString());
})();

export {};
