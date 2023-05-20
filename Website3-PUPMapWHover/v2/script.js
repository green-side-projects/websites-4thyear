const descriptionElement = document.getElementById("description-text");
const descriptionDescriptionElement = document.getElementById(
  "description-description"
);
const descriptionImageElement = document.getElementById("description-image");
const areas = document.querySelectorAll("area");
const defaultImageSource = "default-image.jpg";
const defaultDescriptionText = "PUP NavMap";
const defaultDescriptionDescription =
  "Hover your mouse on the MAP to view each building";

document.addEventListener("mousemove", function (event) {
  var cursor = document.querySelector(".custom-cursor");
  cursor.style.left = event.clientX + "px";
  cursor.style.top = event.clientY + "px";
});

areas.forEach((area) => {
  area.addEventListener("mouseover", () => {
    const description =
      area.getAttribute("data-description") || defaultDescriptionText;
    const descriptionDescription =
      area.getAttribute("data-description-description") ||
      defaultDescriptionDescription;
    const imageSource = area.getAttribute("data-image") || defaultImageSource;
    descriptionElement.textContent = description;
    descriptionDescriptionElement.textContent = descriptionDescription;
    descriptionImageElement.src = imageSource;
  });

  area.addEventListener("mouseout", () => {
    descriptionElement.textContent = defaultDescriptionText;
    descriptionDescriptionElement.textContent = defaultDescriptionDescription;
    descriptionImageElement.src = defaultImageSource;
  });
});

// Set default image and description text on page load
window.addEventListener("load", () => {
  descriptionElement.textContent = defaultDescriptionText;
  descriptionDescriptionElement.textContent = defaultDescriptionDescription;
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
