'use strict';

/* console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value); */

document.querySelector('.check').addEventListener('click', () => {
    const guess = document.querySelector('.guess').value;
    console.log(guess, typeof guess);

    // When there is no input
    if (!guess) {
        // document.querySelector('.message').textContent = '⛔️ No number!';
        document.querySelector('.message').textContent = '⛔️ No number!';
        // When player wins
    }
});