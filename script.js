// Theme switcher
const toggleButton = document.getElementById('theme-toggle');
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Background Music
const audio = new Audio('binks-sake.mp3');
audio.loop = true;
audio.volume = 0.5;

toggleButton.addEventListener('dblclick', () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});
