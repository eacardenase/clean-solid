type Size = '' | 'S' | 'M' | 'L' | 'XL';

class Product {
    constructor(
        public name: string = '',
        public price: number = 0,
        public size: Size = ''
    ) {}

    private isProductReady(): boolean {
        for (let key in this) {
            switch (typeof this[key]) {
                case 'string':
                    if (!this[key]) throw new Error(`${key} is empty`);
                    break;
                case 'number':
                    if (this[key] <= 0)
                        throw new Error(`${key} must be greater than zero`);
                    break;
                default:
                    throw new Error(`${typeof this[key]} is not supported`);
            }
        }

        return true;
    }

    public toString() {
        if (!this.isProductReady) return;

        return `${this.name} (${this.price}), ${this.size}`;
    }
}

(() => {
    const bluePants = new Product('Blue Large Pants', 10, 'S');

    console.log(bluePants.toString());
})();

export {};
