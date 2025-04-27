// Theme switcher
const toggleButton = document.getElementById('theme-toggle');
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Music player
const musicButton = document.getElementById('music-toggle');
const audio = new Audio('binks-sake.mp3');
audio.loop = true;
audio.volume = 0.5;

musicButton.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    musicButton.textContent = '⏸️';
  } else {
    audio.pause();
    musicButton.textContent = '🎵';
  }
});
