class Store{
    constructor(price,product){
        this.price = price;
        this.product = product;
       
    }


//Method to display 
displaystoreDisplay() {;
    console.log(`Price: ${this.price}`);
    console.log(`Product: ${this.product}`);
    
    }
}

//Display store details
const store = new Store('$10', 'Tea');
store.displaystoreDisplay();
