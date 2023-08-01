
<<<<<<< HEAD

const ratingContainers = document.querySelectorAll('.rating');
=======
// // script.js

// // Obtener elementos y agregar eventos a las estrellas de cada tarjeta
// document.querySelectorAll('.tarjeta').forEach(tarjeta => {
//     const estrellas = tarjeta.querySelectorAll('.estrellitas input[type="radio"]');
//     const promedio = tarjeta.querySelector('.calificacion .promedio');
//     const votos = tarjeta.querySelector('.calificacion .votos');
  
//     // Agregar evento de cambio a las estrellas
//     estrellas.forEach(estrella => {
//       estrella.addEventListener('change', calcularCalificacion);
//     });
  
//     // Función para calcular la calificación promedio
//     function calcularCalificacion() {
//       let totalVotos = 0;
//       let sumaCalificaciones = 0;
  
//       estrellas.forEach(estrella => {
//         if (estrella.checked) {
//           sumaCalificaciones += parseInt(estrella.value);
//           totalVotos++;
//         }
//       });
  
//       const promedioCalificacion = totalVotos > 0 ? sumaCalificaciones / totalVotos : 0;
  
//       promedio.textContent = promedioCalificacion.toFixed(1);
//       votos.textContent = totalVotos;
//     }
//   });
  /////////////
  const ratingContainers = document.querySelectorAll('.rating');
>>>>>>> b76c2e0db89874daeed23453228b180b4ec042e0

ratingContainers.forEach(container => {
  const stars = container.querySelectorAll('.star');
  let productRating = parseInt(container.dataset.rating);
  const ratingSpan = container.parentElement.querySelector('.product-rating');

  stars.forEach(star => {
    star.addEventListener('click', () => {
      productRating = parseInt(star.dataset.value);
      updateRating();
    });

    star.addEventListener('mouseover', () => {
      highlightStars(parseInt(star.dataset.value));
    });

    star.addEventListener('mouseout', () => {
      highlightStars(productRating);
    });
  });

  function updateRating() {
    container.dataset.rating = productRating;
    ratingSpan.textContent = productRating;
    highlightStars(productRating);
    // Aquí podrías enviar el valor de productRating al servidor para guardar la calificación en tu base de datos.
  }

  function highlightStars(count) {
    stars.forEach((star, index) => {
      star.style.color = index < count ? 'gold' : 'gray';
    });
  }

  highlightStars(productRating);
});