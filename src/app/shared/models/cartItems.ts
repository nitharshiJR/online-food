import{Food} from "./food";

export class cartItems{
   constructor(public food:Food){
    this.price = food.price
   }
    quantitiy:number = 1;
    price : number 
}