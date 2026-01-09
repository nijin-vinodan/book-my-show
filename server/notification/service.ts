export const sendEmail = async (email: string, message: string) => {
    console.log(`[Notification] Sending email to ${email}: ${message}`);
    // Mock Send
    return true;
};
