

const ratingContainers = document.querySelectorAll('.rating');

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