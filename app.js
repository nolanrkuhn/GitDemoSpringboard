document.addEventListener('DOMContentLoaded', function() {
    const letter = document.querySelector("span");
    if (letter) {
        const num = document.createElement('div');
        // Example: Generate a random number between 0 and 99
        num.innerHTML = Math.floor(Math.random() * 100);
        letter.appendChild(num);
    } else {
        console.log('Element with class "letter" was not found.');
    }
});
