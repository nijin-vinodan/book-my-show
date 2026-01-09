export const processPayment = async (amount: number, token: string) => {
    // Mock Logic
    const success = Math.random() > 0.1; // 90% success
    return { success, transactionId: success ? 'txn-' + Date.now() : undefined };
};
