const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function validate(e) { return emailRegex.test(e); }