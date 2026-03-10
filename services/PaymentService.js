// LEVEL 2: SERVICE LAYER (The other half of the circle)
import { validateOrder } from './OrderService.js';

export function processPayment(amount) {
    validateOrder(); // Calls Order back! (CIRCULAR TRIGGER)
    console.log("Payment processed");
}

// COMMUNICATION TRIGGER:
export function notifyGateway() {
    fetch('http://order-service:3001/status');
}
