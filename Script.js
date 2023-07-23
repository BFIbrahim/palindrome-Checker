function isPalindrome(string) {
    string = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    for (let i = 0, j = string.length - 1; i < j; i++, j--) {
        if (string[i] !== string[j]) {
            return false;
        }
    }

    return true;
}

function checkPalindrome(event) {
    event.preventDefault();

    const inputText = document.getElementById('InputText').value;
    const resultElement = document.getElementById('result');

    if (isPalindrome(inputText)) {
        resultElement.textContent = "It's a palindrome!";
    } else {
        resultElement.textContent = "It's not a palindrome.";
    }
}