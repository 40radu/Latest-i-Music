

export interface ISave {
    id: string;
    name: string;
    price: number;
    quantity: number;
    category: 'bass' | 'acoustic' | 'electric' | 'electroAcoustic' | 'ukulele' | 'classic'
};

export interface IAdd {
    id: string;
    name: string;
    quantity?: number;
    price: number;
    category: 'bass' | 'acoustic' | 'electric' | 'electroAcoustic' | 'ukulele' | 'classic';
};



export class Basket {

    get(): ISave[] {
        const basket = localStorage.getItem('basket')
        if (basket) {
            return JSON.parse(basket)
        } else {
            return [];
        }

    }

    save(articles: ISave[]) {
        localStorage.setItem('basket', JSON.stringify(articles))
    }

    add(article: IAdd) {
        let basket = this.get()
        const foundProduct = basket.find((element) => (element.id === article.id))

        if (foundProduct) {
            foundProduct.quantity++;
        } else {
            basket = [...basket, { ...article, quantity: 1 }]
        }

        this.save(basket)
        console.log(basket)

    }

    remove(idArticle: string) {
        let basket = this.get()
        basket = basket.filter((element) => (element.id != idArticle))
        this.save(basket)
    }

    changeQuantity(idArticle: string, newQuantity: number) {
        let basket = this.get()
        const foundProduct = basket.find((element) => (element.id == idArticle))
        if (foundProduct) {
            foundProduct.quantity += newQuantity
            if (foundProduct.quantity <= 0) {
                this.remove(foundProduct.id)
                this.save(basket)
            } else {
                this.save(basket)
            }
        }
    }

    getNumberProduct() {
        let basket = this.get()
        let number = 0;
        for (let i = 0; i < basket.length; i++) {
            number = number + basket[i].quantity
        }
        return number
    }


    getTotalPrice() {
        let basket = this.get()
        let total = 0;
        for (let i = 0; i < basket.length; i++) {
            total = total + (basket[i].quantity * basket[i].price)
        }
        return total
    }
}


// export function save(articles: ISave[]) {
//     localStorage.setItem('basket', JSON.stringify(articles))
// }

// export function get(): ISave[] {
//     const basket = localStorage.getItem('basket')
//     if (basket) {
//         return JSON.parse(basket)
//     } else {
//         return [];
//     }

// }

// export function add(article: IAdd) {
//     const basket = get()
//     const foundProduct = basket.find((element) => (element.id == article.id))
//     if (foundProduct) {
//         foundProduct.quantity++;
//     } else {
//         basket.push({ ...article, quantity: 1 })
//     }
//     save(basket)
// }

// export function remove(idArticle: string) {
//     let basket = get()
//     basket = basket.filter((element) => (element.id != idArticle))
//     save(basket)
// }


// export function changeQuantity(idArticle: string, newQuantity: number) {
//     let basket = get();
//     const foundProduct = basket.find((element) => (element.id == idArticle))
//     if (foundProduct) {
//         foundProduct.quantity += newQuantity
//         if (foundProduct.quantity <= 0) {
//             remove(foundProduct.id)
//         } else {
//             save(basket)
//         }
//     }
// }

// export function getNumberProduct() {
//     const basket = get()
//     let number = 0;
//     for (let i = 0; i < basket.length; i++) {
//         number = number + basket[i].quantity
//     }
//     return number
// }

// export function getTotalPrice() {
//     const basket = get();
//     let total = 0;
//     for (let i = 0; i < basket.length; i++) {
//         total = total + (basket[i].quantity * basket[i].price)
//     }
//     return total
// }