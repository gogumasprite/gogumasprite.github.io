function encodeBase64() {
    const inputText = document.getElementById('inputText').value;
    const outputText = document.getElementById('outputText');
    try {
        const encoded = btoa(unescape(encodeURIComponent(inputText)));
        outputText.value = encoded;
    } catch (e) {
        outputText.value = '오류: 유효하지 않은 입력입니다.';
    }
}

function decodeBase64() {
    const inputText = document.getElementById('inputText').value;
    const outputText = document.getElementById('outputText');
    try {
        const decoded = decodeURIComponent(escape(atob(inputText)));
        outputText.value = decoded;
    } catch (e) {
        outputText.value = '오류: 유효하지 않은 Base64 문자열입니다.';
    }
}