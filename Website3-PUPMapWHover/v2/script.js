const descriptionElement = document.getElementById("description-text");
const descriptionImageElement = document.getElementById("description-image");
const areas = document.querySelectorAll("area");
const defaultImageSource = "default-image.jpg";
const defaultDescriptionText = "Default Description Text";

document.addEventListener("mousemove", function (event) {
  var cursor = document.querySelector(".custom-cursor");
  cursor.style.left = event.clientX + "px";
  cursor.style.top = event.clientY + "px";
});

areas.forEach((area) => {
  area.addEventListener("mouseover", () => {
    const description = area.getAttribute("data-description");
    const imageSource = area.getAttribute("data-image");
    descriptionElement.textContent = description || defaultDescriptionText;
    descriptionImageElement.src = imageSource || defaultImageSource;
  });

  area.addEventListener("mouseout", () => {
    descriptionElement.textContent = "";
    descriptionImageElement.src = defaultImageSource;
  });
});

// Set default image and description text on page load
window.addEventListener("load", () => {
  descriptionElement.textContent = defaultDescriptionText;
  descriptionImageElement.src = defaultImageSource;
});

// Rest of your JavaScript code...

document.addEventListener("mousemove", function (event) {
  var cursor = document.querySelector(".custom-cursor");
  var trailingCursor = document.createElement("div");
  trailingCursor.classList.add("trailing-cursor");
  trailingCursor.style.left = event.clientX + "px";
  trailingCursor.style.top = event.clientY + "px";
  document.body.appendChild(trailingCursor);

  setTimeout(function () {
    document.body.removeChild(trailingCursor);
  }, 1000);

  cursor.style.left = event.clientX + "px";
  cursor.style.top = event.clientY + "px";
});
