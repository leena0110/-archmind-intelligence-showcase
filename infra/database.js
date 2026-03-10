// LEVEL 0: THE LEAF (Target for Reverse Analysis)
// If you right-click this and run Reverse Impact, it will show the whole app!
export const DB_ENGINE = {
    connect: () => console.log("Connected to DB"),
    retryLimit: 3
};
