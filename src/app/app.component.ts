import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from './interfaces/product';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public products: Product[] = [];
  public cart: Product[] = [];
  public cartTotalPrice: number = 0;

  constructor(private productService: ProductService) { }

  ngOnInit() {
      this.getProducts();
  }

  public getProducts(): void {
    this.productService.getProducts().subscribe(
      (response: Product[]) => {
        this.products = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public addProductToCart(cart: Product[], product: Product) {
    let i = this.cart.indexOf(product); 
    if ( i === -1 ) this.cart.push(product);
    this.calculateTotalCartPrice(cart);
  }

  public deleteProductFromCart(cart: Product[], product: Product) {
    let i = cart.indexOf(product); 
    if ( i !== -1 ) cart.splice( i, 1 );
    this.calculateTotalCartPrice(cart);
  }

  public calculateTotalCartPrice(cart: Product[]) {
    let price = 0;
    cart.forEach(p => {
      price += p.price;
    });
    // this.cartTotalPrice = price;
    this.cartTotalPrice = price;
  }

  public newCartPurchased(cart: Product[]) {
    let price = 0;
    cart.forEach(p => {
      price += p.price;
    });
    alert(`Congratulations! You bought a lot of stuff for only ${price} kr`);
  }
}