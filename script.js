// script.js
function startConfetti() {
    const confettiContainer = document.getElementById('confetti-container');
    confettiContainer.innerHTML = ''; // Clear existing confetti

    const colors = ['#d14760', '#c80dfc', '#e83acb', '#f73155']; // Array of colors

    for (let i = 0; i < 100; i++) { // Generate 100 pieces of confetti
        const confetti = document.createElement('div');
        confetti.classList.add('confetti-piece');
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDuration = `${Math.random() * 3 + 2}s`; // Random fall duration between 2 and 5 seconds
        confettiContainer.appendChild(confetti);
    }

    // Stop confetti after 5 seconds
    setTimeout(() => {
        confettiContainer.innerHTML = '';
    }, 5000);
}
