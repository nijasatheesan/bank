function generateCaptcha() {
    const captchaText = generateRandomText(6);
    const canvas = document.getElementById('captchaCanvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = 120;
    canvas.height = 40;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Background color
    ctx.fillStyle = '#f4f4f9';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Text styling
    ctx.font = '24px Arial';
    ctx.fillStyle = '#333';
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    ctx.fillText(captchaText, canvas.width / 2, canvas.height / 2);

    // Store the generated CAPTCHA text
    document.getElementById('captchaInput').dataset.captcha = captchaText;
}

function generateRandomText(length) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let text = '';
    for (let i = 0; i < length; i++) {
        text += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return text;
}

function validateCaptcha() {
    const enteredCaptcha = document.getElementById('captchaInput').value;
    const generatedCaptcha = document.getElementById('captchaInput').dataset.captcha;
    if (enteredCaptcha !== generatedCaptcha) {
        alert('CAPTCHA does not match. Please try again.');
        generateCaptcha();
        return false;
    }
    return true;
}

// Generate CAPTCHA on page load
window.onload = generateCaptcha;
