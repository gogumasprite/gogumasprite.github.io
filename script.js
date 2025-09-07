function encodeBase64() {
    const inputText = document.getElementById('inputText').value;
    const outputText = document.getElementById('outputText');
    try {
        const encoded = btoa(unescape(encodeURIComponent(inputText)));
        outputText.value = encoded;
    } catch (e) {
        outputText.value = 'Error: Invalid input.';
    }
}

function decodeBase64() {
    const inputText = document.getElementById('inputText').value;
    const outputText = document.getElementById('outputText');
    try {
        const decoded = decodeURIComponent(escape(atob(inputText)));
        outputText.value = decoded;
    } catch (e) {
        outputText.value = 'Error: Invalid Base64 string.';
    }
}
