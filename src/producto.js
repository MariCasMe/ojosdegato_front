const ratingContainers = document.querySelectorAll(".rating");
ratingContainers.forEach((container) => {
  // Obtener todas las estrellas dentro de cada contenedor de calificación
  const stars = container.querySelectorAll(".star");
  // Obtener la calificación del producto almacenada en el atributo 'data-rating' del contenedor
  let productRating = parseInt(container.dataset.rating);
  // Obtener el elemento en el que se mostrará la calificación del producto
  const ratingSpan = container.parentElement.querySelector(".product-rating");

  // Agregar eventos a cada estrella
  stars.forEach((star) => {
    // Evento de clic para cambiar la calificación del producto cuando se hace clic en una estrella
    star.addEventListener("click", () => {
      productRating = parseInt(star.dataset.value);
      updateRating();
    });

    // Evento al pasar el ratón por encima de una estrella para resaltar las estrellas hasta la que se pasó el ratón
    star.addEventListener("mouseover", () => {
      highlightStars(parseInt(star.dataset.value));
    });

    // Evento al salir del área de una estrella para mostrar las estrellas resaltadas según la calificación actual del producto
    star.addEventListener("mouseout", () => {
      highlightStars(productRating);
    });
  });

  // Función para actualizar la calificación del producto y mostrarla
  function updateRating() {
    container.dataset.rating = productRating;
    ratingSpan.textContent = productRating;
    highlightStars(productRating);
    // Aquí podrías enviar el valor de productRating al servidor para guardar la calificación en tu base de datos.
  }

  // Función para resaltar las estrellas hasta cierto valor (count)
  function highlightStars(count) {
    stars.forEach((star, index) => {
      star.style.color = index < count ? "gold" : "gray";
    });
  }

  // Resaltar las estrellas según la calificación del producto al cargar la página
  highlightStars(productRating);
});
