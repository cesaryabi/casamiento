document.addEventListener('DOMContentLoaded', function() {
  loadGalleryImages();
});

async function loadGalleryImages() {
  const galleryContainer = document.getElementById('imageGallery');
  
  try {
  
    // Aquí puedes listar manualmente las imágenes de tu galería
    const images = [
        
     '01.jpg',
     '02.jpg',
     '03.jpg',
     '04.png',
     '05.jpg',
     '06.jpg',
     '07.jpg',
     '08.jpg',
     '09.png',
     '10.jpg',
     '11.jpg',
     '12.jpg',
     '13.jpg',
     '14.jpg',
     '15.png',
     '16.jpg',
     '17.jpg',
     
     '19.jpg',
     '20.jpg',
     '21.jpg',
     '22.jpg',
     '23.jpg',
      // Agrega aquí los nombres de tus imágenes
    ];

    images.forEach(imageName => {
      const img = document.createElement('img');
      img.src = `https://cesaryabi.github.io/casamiento/assets/img/galeria/${imageName}`;
      img.style= "height: 100%;"
      img.alt = 'Foto de nuestra historia';
      img.className = 'gallery-image';
      
      // Opcional: Agregar lightbox al hacer click
      img.addEventListener('click', () => {
      // Se eliminó el evento click según las instrucciones
      });

      galleryContainer.appendChild(img);
    });

  } catch (error) {
    console.error('Error cargando la galería:', error);
    galleryContainer.innerHTML = '<p>Error al cargar las imágenes</p>';
  }
} 
