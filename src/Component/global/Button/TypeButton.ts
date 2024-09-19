export interface IButton {
    className : "primary" | "secondary" | "third" | "addBasket";
    value : "Get in touch" | "About us" | "Add to the cart" | "Send" | "Discover" | "buy" ;
    onClick? : ()=> void
}