const descriptionElement = document.getElementById("description-text");
const areas = document.querySelectorAll("area");

document.addEventListener("mousemove", function (event) {
  var cursor = document.querySelector(".custom-cursor");
  cursor.style.left = event.clientX + "px";
  cursor.style.top = event.clientY + "px";
});

areas.forEach((area) => {
  area.addEventListener("mouseover", () => {
    const description = area.getAttribute("data-description");
    descriptionElement.textContent = description;
  });

  area.addEventListener("mouseout", () => {
    descriptionElement.textContent = "";
  });
});
