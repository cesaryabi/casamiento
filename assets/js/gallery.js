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
    

   

 
    
    
     '11.jpg',
     '12.jpg',
   

     '15.jpg',
     
   
     '18.jpg',
     '19.jpg',
  
    
     '22.jpg',
     '23.jpg',
    
     
    
 
     
     '29.jpg',
     '30.jpg',
     '31.jpg',
   
    
     '34.jpg',
    
   
      // Agrega aquí los nombres de tus imágenes
    ];

    images.forEach(imageName => {
      const img = document.createElement('img');
      img.src = `https://cesaryabi.github.io/casamiento/assets/img/galeria/${imageName}?a=0`;


    
    
     
      img.alt = 'Foto de nuestra historia';
      img.className = 'gallery-image';
      
      // Opcional: Agregar lightbox al hacer click
      img.addEventListener('click', () => {
      // Se eliminó el evento click según las instrucciones
      });

      galleryContainer.appendChild(img);
    });
    window.addEventListener('resize', () => {
      console.log(`Ancho de pantalla actual: ${window.innerWidth}px`);
      const galleryImages = document.querySelectorAll('.gallery-image');
      galleryImages.forEach(img => {
        if (window.innerWidth > 500) {
          img.style = "padding: 0; margin: 0; width: 100vw; display: block;";
        } else {
          img.style = "height: 100vw; padding: 0; margin: 0; width: 100vw; display: block;";
        }
      });
   
    });
  } catch (error) {
    console.error('Error cargando la galería:', error);
    galleryContainer.innerHTML = '<p>Error al cargar las imágenes</p>';
  }
} 
