const countdownElement = document.getElementById('countdown');
const targetDate = new Date('2025-05-12T16:00:00');

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    countdownElement.textContent = 'Už jdeme na tenis! 🎾';
    clearInterval(interval);
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdownElement.textContent = 
    `${days} dní ${hours} hodin ${minutes} minut ${seconds} sekund`;
}

updateCountdown(); // okamžité spuštění
const interval = setInterval(updateCountdown, 1000);