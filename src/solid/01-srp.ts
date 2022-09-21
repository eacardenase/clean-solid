interface Product {
    id: number;
    name: string;
}

class ProductManager {
    private httpAdapter: Object = {};

    getProduct(id: number) {
        // Realiza un proceso para obtener el producto y retornarlo
        console.log('Producto: ', { id, name: 'OLED Tv' });
    }

    saveProduct(product: Product) {
        // Realiza una petición para salvar en base de datos
        console.log('Guardando en base de datos', product);
    }
}

class Mailer {
    private masterEmail: string = 'eacardenase@gmail.com';

    sendEmail(emailList: string[], template: 'to-clients' | 'to-admins') {
        console.log(
            `Enviando correo a los ${template.split('-')[1]}`,
            template
        );
    }
}

// Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
// Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
class ProductBloc {
    // private productManager: ProductManager;
    // private mailer: Mailer;

    // constructor(productManager: ProductManager, mailer: Mailer) {
    //     this.productManager = productManager;
    //     this.mailer = mailer;
    // }

    constructor(
        private productManager: ProductManager,
        private mailer: Mailer
    ) {}

    loadProduct(id: number) {
        this.productManager.getProduct(id);
    }

    saveProduct(product: Product) {
        this.productManager.saveProduct(product);
    }

    notifyClients() {
        this.mailer.sendEmail(['eacardenase@unal.edu.co'], 'to-clients');
    }
}

class CartBloc {
    private productsInCart: Product[] = [];

    addToCart(productId: number) {
        // Agregar al carrito de compras
        console.log('Agregando al carrito ', productId);
    }
}

const productManager = new ProductManager();
const mailer = new Mailer();

const productBloc = new ProductBloc(productManager, mailer);
const cartBloc = new CartBloc();

productBloc.loadProduct(10);
productBloc.saveProduct({ id: 10, name: 'OLED TV' });
productBloc.notifyClients();
cartBloc.addToCart(10);

export {};
