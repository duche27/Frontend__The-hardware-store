import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Product } from "../interfaces/product";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: 'root' })            // inyected in app.module
export class ProductService {

    private apiServerURL = environment.apiBaseURL + '/api/products';

    constructor(private http: HttpClient) { }

    public addProduct(product: Product): Observable<Product> {
        return this.http.post<Product>(`${this.apiServerURL}/newProduct`, product);
    }

    public getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(`${this.apiServerURL}/getAll`);
    }

    public getTotalProductsBySection(): Observable<string> {
        return this.http.get<string>(`${this.apiServerURL}/productsBySections`);
    }

    public getTotalProductsNumber(): Observable<string> {
        return this.http.get<string>(`${this.apiServerURL}/totalProductsNumber`);
    }

    public getProduct(product_id: number): Observable<Product> {
        return this.http.get<Product>(`${this.apiServerURL}/getProduct/${product_id}`);
    }

    public updateProduct(product: Product): Observable<Product> {
        return this.http.put<Product>(`${this.apiServerURL}/updateProduct/${product.product_id}`, product);
    }

    public deleteProduct(product_id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerURL}/deleteProduct/${product_id}`);
    }

    public deleteAllProducts(): Observable<void> {
        return this.http.delete<void>(`${this.apiServerURL}/deleteAll`);
    }
}