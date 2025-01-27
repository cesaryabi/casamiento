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

  async addSong() {
    const songName = document.getElementById('songName').value;
    const artistName = document.getElementById('artistName').value;
    await  agregarCancion(songName, artistName)
 
    //this.saveSongs();
    this.loadSongs()
    this.form.reset();
  }
  

 async voteSong(songId) {
   console.log(songId)
   await actualizarVotoCancion(songId)
   this.loadSongs()
    }
  

  async renderSongs() {
    console.log("sigo por aca 2")
   
    this.songList.innerHTML = '';
    
    // Ordenar canciones por votos
    const sortedSongs = this.songs.sort((a, b) => b.voto - a.voto);
    
    sortedSongs.forEach(song => {
      const songElement = document.createElement('div');
      songElement.className = 'song-item';
      songElement.innerHTML = `
        <div class="song-info">
          <div class="song-details" style="background-color: rgba(0,0,0,0.05); display: flex; justify-content: space-between; align-items: center;">
            <div>
              <h5>${song.Nombre}</h5>
              <p>artista: ${song.Artista},
              agregado por:${song.Creador}</p>
            </div>
            <div class="vote-buttons">
              <button class="btn btn-sm btn-outline-primary" onclick="playlistManager.voteSong('${song.id}')">
                <i class="fas fa-thumbs-up"></i> ${song.voto}
              </button>
             </div>
          </div>
        </div>
      `;
      this.songList.appendChild(songElement);
    });
  }

  saveSongs() {
    localStorage.setItem('weddingSongs', JSON.stringify(this.songs));
  }

  async loadSongs() {
    console.log("estoy por aca")
    const savedSongs = await  obtenerCancionesAsync() 
    const savedSongs_ = localStorage.getItem('weddingSongs');

    console.log( savedSongs_)
    console.log(savedSongs)
    if (savedSongs) {
      this.songs = savedSongs;
      console.log(this.songs)
      await this.renderSongs();
    }
  }
}
class DeseosManager {
  constructor() {
    this.deseos = [];
    this.form = document.getElementById('busonForm');
    this.deseosList = document.getElementById('deseosList');
    
    this.initializeEventListeners();
    this.loadSongs();
  }

  initializeEventListeners() {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.addSong();
    });
  }

  async addSong() {
    const songName = document.getElementById('songName').value;
    const artistName = document.getElementById('artistName').value;
    await  agregarCancion(songName, artistName)
 
    //this.saveSongs();
    this.loadSongs()
    this.form.reset();
  }
  

 async voteSong(songId) {
   console.log(songId)
   await actualizarVotoCancion(songId)
   this.loadSongs()
    }
  

  async renderSongs() {
    console.log("sigo por aca 2")
   
    this.songList.innerHTML = '';
    
    // Ordenar canciones por votos
    const sortedSongs = this.songs.sort((a, b) => b.voto - a.voto);
    
    sortedSongs.forEach(song => {
      console.log(song.Creador)
      const songElement = document.createElement('div');
      songElement.className = 'song-item';
      songElement.innerHTML = `
        <div class="song-info">
          <div class="song-details" style="background-color: rgba(0,0,0,0.05); display: flex; justify-content: space-between; align-items: center;">
            <div>
              <h5>${song.Nombre}</h5>
              <p>${song.Artista}</p>
              <p>${song.Creador}</p>
            </div>
            <div class="vote-buttons">
              <button class="btn btn-sm btn-outline-primary" onclick="playlistManager.voteSong('${song.id}')">
                <i class="fas fa-thumbs-up"></i> ${song.voto}
              </button>
             </div>
          </div>
        </div>
      `;
      this.songList.appendChild(songElement);
    });
  }

  saveSongs() {
    localStorage.setItem('weddingSongs', JSON.stringify(this.songs));
  }

  async loadSongs() {
    console.log("estoy por aca")
    const savedSongs = await  obtenerCancionesAsync() 
    const savedSongs_ = localStorage.getItem('weddingSongs');

    console.log( savedSongs_)
    console.log(savedSongs)
    if (savedSongs) {
      this.songs = savedSongs;
      console.log(this.songs)
      await this.renderSongs();
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
    voto:0,
    fecha: firebase.firestore.FieldValue.serverTimestamp(),
    Creador: document.getElementById('nomInvitado').innerText
  }).catch((error)=>{
    console.error("Error al guardar cancion: ", error);
  });
}

// Opción 1: Usando .then()
function obtenerCanciones() {
  db.collection('canciones')
    .orderBy('fecha', 'desc')
    .get()
    .then((querySnapshot) => {
     
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
      });
    })
    .catch((error) => {
      console.error("Error obteniendo canciones: ", error);
    });
}
async function actualizarVotoCancion(songId) {
  const songRef = db.collection('canciones').doc(songId);
  await songRef.update({
    voto: firebase.firestore.FieldValue.increment(1) // Incrementa el voto en 1
  }).catch((error) => {
    console.error("Error al actualizar el voto: ", error);
  });
}
// Opción 2: Usando async/await
async function obtenerCancionesAsync() {
  try {
    const querySnapshot = await db.collection('canciones')
    .orderBy('fecha', 'desc')
      .get();
    let canciones=[];
    querySnapshot.forEach((doc) => {
      let cancion = doc.data()
      cancion.id=doc.id
      canciones.push(cancion)
      console.log(doc.id, " => ", doc.data());
    });
    return canciones;
  } catch (error) {
    console.error("Error obteniendo canciones: ", error);
  }
} 




