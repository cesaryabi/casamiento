document.addEventListener('DOMContentLoaded', function() {
  loadGalleryImages();
});

async function loadGalleryImages() {
  const galleryContainer = document.getElementById('imageGallery');
  
  try {
   
    // Aquí puedes listar manualmente las imágenes de tu galería
    const images = [
        
     '01.png',
     '02.jpg',
     '03.jpg',
     '04.jpg',
     '05.jpg',
     '06.jpg',
     '07.jpg',
     '08.jpg',
     '09.jpg',
     '10.jpg',
     '11.jpg',
     '12.jpg',
     '13.jpg',
     '14.jpg',
     '15.jpg',
     '16.jpg',
     '17.jpg',
     '19.jpg',
     '20.jpg',
     '21.jpg',
     '22.jpg',
     '23.jpg',
     '24.jpg',
     '25.jpg',
     '26.jpg',
     '27.jpg',
     '28.jpg',
     '29.jpg',
     '30.jpg',
     '31.jpg',
     '32.jpg',
     '33.jpg',
     '34.jpg',
     '35.jpg',
     '36.jpg',
      // Agrega aquí los nombres de tus imágenes
    ];

    images.forEach(imageName => {
      const img = document.createElement('img');
      img.src = `https://cesaryabi.github.io/casamiento/assets/img/galeria/${imageName}?a=0`;
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