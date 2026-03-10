// LEVEL 2: SERVICE LAYER
// This shows CIRCULAR DEPENDENCY with PaymentService.js
import { saveUser } from '../models/Repository.js';
import { processPayment } from './PaymentService.js';

export function createOrder() {
    saveUser({ name: "Demo" });
    processPayment(100); // Calls Payment
    return "Order Created";
}

export function validateOrder() {
    return true;
}
