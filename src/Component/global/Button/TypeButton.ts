import { IAdd } from "@/Service/HandleBasket/handleBasket";

export interface IButton {
    className : "primary" | "secondary" | "third" | "addBasket" | "third" | "fourthly";
    value : "Get in touch" | "About us" | "Add to the cart" | "Send" | "Discover" | "buy" | 'view similar' | "let's discover";
    data? : IAdd
}