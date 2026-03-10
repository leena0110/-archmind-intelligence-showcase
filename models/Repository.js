// LEVEL 1: DATA LAYER
import { DB_ENGINE } from '../infra/database.js';

export function saveUser(data) {
    DB_ENGINE.connect();
    console.log("Saving user...");
}

export function fetchOrder() {
    return { id: 1, item: "Laptop" };
}
