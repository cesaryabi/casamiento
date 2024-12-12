// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBg8aKjD-Z4aukr7CejJKfLrOLqngeq4vc",
  authDomain: "bodabase.firebaseapp.com",
  projectId: "bodabase",
  storageBucket: "bodabase.firebasestorage.app",
  messagingSenderId: "770712071112",
  appId: "1:770712071112:web:adae37c7413dd84bd7aefd",
  measurementId: "G-6BQ0BCVEWS"
};

// Inicializar Firebase
const app = firebase.initializeApp(firebaseConfig);

// Inicializar Firestore
const db = firebase.firestore();

class PlaylistManager {
  constructor() {
    this.songs = [];
    this.form = document.getElementById('songForm');
    this.songList = document.getElementById('songList');
    
    this.initializeEventListeners();
    this.loadSongs();
  }

  initializeEventListeners() {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.addSong();
    });
  }

  addSong() {
    const songName = document.getElementById('songName').value;
    const artistName = document.getElementById('artistName').value;

    const newSong = {
      id: Date.now(),
      song: songName,
      artist: artistName,
      votes: 0,
      addedBy: 'Invitado', // Podrías agregar un campo para el nombre del invitado
      timestamp: new Date()
    };

    this.songs.push(newSong);
    this.saveSongs();
    this.renderSongs();
    this.form.reset();
  }

  voteSong(songId, increment = true) {
    const song = this.songs.find(s => s.id === songId);
    if (song) {
      song.votes += increment ? 1 : -1;
      this.saveSongs();
      this.renderSongs();
    }
  }

  renderSongs() {
    this.songList.innerHTML = '';
    
    // Ordenar canciones por votos
    const sortedSongs = [...this.songs].sort((a, b) => b.votes - a.votes);
    
    sortedSongs.forEach(song => {
      const songElement = document.createElement('div');
      songElement.className = 'song-item';
      songElement.innerHTML = `
        <div class="song-info">
          <div class="song-details">
            <h5>${song.song}</h5>
            <p>${song.artist}</p>
          </div>
          <div class="song-votes">
            <button class="vote-button" onclick="playlistManager.voteSong(${song.id}, false)">
              <i class="fas fa-thumbs-down"></i>
            </button>
            <span>${song.votes}</span>
            <button class="vote-button" onclick="playlistManager.voteSong(${song.id})">
              <i class="fas fa-thumbs-up"></i>
            </button>
          </div>
        </div>
      `;
      this.songList.appendChild(songElement);
    });
  }

  saveSongs() {
    localStorage.setItem('weddingSongs', JSON.stringify(this.songs));
  }

  loadSongs() {
    const savedSongs = localStorage.getItem('weddingSongs');
    if (savedSongs) {
      this.songs = JSON.parse(savedSongs);
      this.renderSongs();
    }
  }
}

// Inicializar el administrador de playlist
const playlistManager = new PlaylistManager(); 

// Agregar una canción
function agregarCancion(Nombre, Artista) {
  return db.collection('canciones').add({
    Artista: Artista,
    Nombre: Nombre,
    fecha: firebase.firestore.FieldValue.serverTimestamp()
  });
}

// Opción 1: Usando .then()
function obtenerCanciones() {
  db.collection('canciones')
    .orderBy('fecha', 'desc')
    .get()
    .then((querySnapshot) => {
      console.log(querySnapshot)
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
      });
    })
    .catch((error) => {
      console.error("Error obteniendo canciones: ", error);
    });
}

// Opción 2: Usando async/await
async function obtenerCancionesAsync() {
  try {
    const querySnapshot = await db.collection('canciones')
      .orderBy('timestamp', 'desc')
      .get();
    
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  } catch (error) {
    console.error("Error obteniendo canciones: ", error);
  }
} 