export function validateEmail(email) {
    // Regular expression pattern for email validation
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

export function validatePassword(password) {
    // Password length should be at least 8 characters
    return password.length >= 8;
}

