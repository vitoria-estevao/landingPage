function start() {
  let time = 2000,
    currentImageIndex = 0,
    images = document.querySelectorAll("#slider img");
  max = images.length;

  function nextImage() {
    images[currentImageIndex].classList.remove("selected");

    currentImageIndex++;

    if (currentImageIndex >= max) currentImageIndex = 0;

    images[currentImageIndex].classList.add("selected");
  }
  setInterval(() => {
    //troca de imagem
    nextImage();
  }, time);
}

window.addEventListener("load", start);
