import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from '../shared/models/cart';
import { cartItems } from '../shared/models/cartItems';
import { Food } from '../shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart;
  private cartSubject: BehaviorSubject<Cart>;

  constructor() {
    // Initialize cart safely
    this.cart = this.getCartFromLocalStorage();
    this.cartSubject = new BehaviorSubject(this.cart);
  }

  addToCart(food: Food): void {
    let cartItem = this.cart.items.find(item => item.food.id === food.id);
    if (cartItem) return;

    this.cart.items.push(new cartItems(food));
    this.setCartToLocalStorage();
  }

  removeFromCart(foodId: string): void {
    this.cart.items = this.cart.items.filter(item => item.food.id != foodId);
    this.setCartToLocalStorage();
  }

  changeQuantity(foodId: string, quantity: number) {
    let cartItem = this.cart.items.find(item => item.food.id === foodId);
    if (!cartItem) return;

    cartItem.quantitiy = quantity;
    cartItem.price = quantity * cartItem.food.price;
    this.setCartToLocalStorage();
  }

  clearCart() {
    this.cart = new Cart();
    this.setCartToLocalStorage();
  }

  getCartObservable(): Observable<Cart> {
    return this.cartSubject.asObservable();
  }

  getCart(): Cart {
    return this.cartSubject.value;
  }

  private setCartToLocalStorage(): void {
    // Calculate totals
    this.cart.totalPrice = this.cart.items.reduce(
      (prevSum, currentItem) => prevSum + currentItem.price, 0
    );
    this.cart.totalCount = this.cart.items.reduce(
      (prevSum, currentItem) => prevSum + currentItem.quantitiy, 0
    );

    // Save to localStorage only if in browser
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('Cart', JSON.stringify(this.cart));
    }

    // Notify subscribers
    this.cartSubject.next(this.cart);
  }

  private getCartFromLocalStorage(): Cart {
    if (typeof window !== 'undefined' && window.localStorage) {
      const cartJson = localStorage.getItem('Cart');
      return cartJson ? JSON.parse(cartJson) : new Cart();
    }
    return new Cart(); // fallback for server/build
  }
}
