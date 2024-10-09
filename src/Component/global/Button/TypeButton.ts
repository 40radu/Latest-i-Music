import { IAdd } from "@/Service/HandleBasket/handleBasket";

export interface IButton {
    className : "primary" | "secondary" | "third" | "third" | "fourthly";
    value : "Get in touch" | "About us" | "Add to the cart" | "Send" | "Discover" | "buy" | 'view similar' | "let's discover";
    data? : IAdd;
    type? : 'button' | 'reset' | 'submit' 
    isDisable? : true | false
}