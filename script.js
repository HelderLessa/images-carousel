let index = 0;

function show_slide(i) {
  //increment/decrement slide index
  index += i;

  //grab all the images
  let images = document.getElementsByClassName("image");
  //grab all the dots
  let dots = document.getElementsByClassName("dot");
  // hide all the images
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  // remove the active class from the dot
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // if index reaches the last position of array
  if (index > images.length - 1) {
    index = 0;
  }
  // if index goes before the first positions
  if (index < 0) {
    index = images.length - 1;
  }

  images[index].style.display = "block";
  dots[index].className += " active";
}
window.addEventListener("onload", show_slide(index));
