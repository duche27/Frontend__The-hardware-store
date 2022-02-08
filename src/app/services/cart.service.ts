import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Cart } from "../interfaces/cart";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: 'root' })
export class CartService {

    private apiServerURL = environment.apiBaseURL + '/api/carts';

    constructor(private http: HttpClient) { }

    public addCart(cart: Cart): Observable<Cart> {
        return this.http.post<Cart>(`${this.apiServerURL}/newCart`, cart);
    }

    public getCarts(): Observable<Cart[]> {
        return this.http.get<Cart[]>(`${this.apiServerURL}/getAll`);
    }

    public getCart(cart_id: number): Observable<Cart> {
        return this.http.get<Cart>(`${this.apiServerURL}/getCart/${cart_id}`);
    }

    public updateCart(cart: Cart): Observable<Cart> {
        return this.http.put<Cart>(`${this.apiServerURL}/updateCart/${cart.cart_id}`, cart);
    }

    public deleteCart(cart_id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerURL}/deleteCart/${cart_id}`);
    }

    public deleteAllCarts(): Observable<void> {
        return this.http.delete<void>(`${this.apiServerURL}/deleteAll`);
    }
}