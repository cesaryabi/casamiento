document.addEventListener('DOMContentLoaded', function() {
  const audio = document.getElementById('backgroundMusic');
  const audioControl = document.getElementById('audioControl');
  const audioIcon = document.getElementById('audioIcon');
  const audioContainer = document.querySelector('.audio-player-container');

  let isPlaying = false;

  // Función para manejar el play/pause
  function togglePlay() {
    if (isPlaying) {
      audio.pause();
      audioIcon.classList.remove('fa-pause');
      audioIcon.classList.add('fa-play');
      audioContainer.classList.remove('playing');
    } else {
      audio.play()
        .then(() => {
          audioIcon.classList.remove('fa-play');
          audioIcon.classList.add('fa-pause');
          audioContainer.classList.add('playing');
        })
        .catch(error => {
          console.log("Error al reproducir el audio:", error);
        });
    }
    isPlaying = !isPlaying;
  }

  // Event listener para el botón
  audioControl.addEventListener('click', togglePlay);

  // Manejar la interacción del usuario
  // document.addEventListener('click', function() {
  //   if (!isPlaying) {
  //     togglePlay();
  //   }
  // }, { once: true });

  // Reanudar la música cuando el usuario vuelve a la pestaña
  document.addEventListener('visibilitychange', function() {
    if (!document.hidden && isPlaying) {
      audio.play()
        .catch(error => console.log("Error al reanudar el audio:", error));
    }
  });
}); 