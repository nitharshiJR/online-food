import { cartItems} from "./cartItems";

export class Cart{
  items:cartItems[] = [];
  totalPrice:number = 0;
  totalCount:number = 0;
}