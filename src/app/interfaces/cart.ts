import { Product } from "./product";

export interface Cart {
    cart_id: number,
    products: Product[],
    price: number
}