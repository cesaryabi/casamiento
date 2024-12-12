document.addEventListener('DOMContentLoaded', () => {
  // Seleccionar todas las tarjetas
  const cards = document.querySelectorAll('.info-card');
  
  // Agregar clases de animación inicial
  cards.forEach((card, index) => {
    // Definir los efectos como arrays de clases separadas
    const effects = [
      ['fade-in-card'],
      ['fade-in-card', 'fade-in-left'],
      ['fade-in-card', 'fade-in-right'],
      ['fade-in-card', 'fade-in-rotate']
    ];
    
    // Obtener el array de clases para esta tarjeta
    const effectClasses = effects[index % effects.length];
    
    // Agregar cada clase individualmente
    effectClasses.forEach(className => {
      card.classList.add(className);
    });

    // Agregar la clase de retraso
    card.classList.add(`delay-${index % 3 + 1}`);
  });

  // Configurar el Intersection Observer
  const appearOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -100px 0px"
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      
      // Agregar clase para iniciar animación
      entry.target.classList.add('appear');
      
      // Opcional: dejar de observar después de la animación
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  // Observar todas las tarjetas
  cards.forEach(card => {
    appearOnScroll.observe(card);
  });

  // Bonus: Efecto de parallax suave para el fondo
  const heroBackground = document.querySelector('.hero-background');
  if (heroBackground) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    });
  }
}); 