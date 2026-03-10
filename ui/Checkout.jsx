// LEVEL 3: PRESENTATION LAYER
import { createOrder } from '../services/OrderService.js';

export function CheckoutButton() {
    const handleclick = () => {
        createOrder();
    };
    return "Button UI";
}
