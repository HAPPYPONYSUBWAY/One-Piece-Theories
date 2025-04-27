// Theme switcher
const toggleButton = document.getElementById('theme-toggle');
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Music player
const musicButton = document.getElementById('music-toggle');
const audio = document.getElementById('binks-audio');

musicButton.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    musicButton.textContent = '⏸️';
  } else {
    audio.pause();
    musicButton.textContent = '🎵';
  }
});
