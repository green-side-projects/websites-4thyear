const imageUrls = [
  "https://cdn.pixabay.com/photo/2021/02/17/08/20/nature-6023501_960_720.jpg",
  "https://cdn.pixabay.com/photo/2015/05/04/10/03/honey-752145_960_720.jpg",
  "https://cdn.pixabay.com/photo/2015/05/04/10/16/vegetables-752153_960_720.jpg",
  "https://cdn.pixabay.com/photo/2015/07/02/20/37/cup-829527_960_720.jpg",
  "https://cdn.pixabay.com/photo/2016/03/26/18/23/bread-1281053_960_720.jpg",
  "https://cdn.pixabay.com/photo/2014/09/15/16/53/tomatoes-447170_960_720.jpg",
  "https://cdn.pixabay.com/photo/2018/05/29/02/13/ferrero-rocher-3437773_960_720.jpg",
  "https://cdn.pixabay.com/photo/2015/07/06/16/21/smoothie-833470_960_720.jpg",
  "https://cdn.pixabay.com/photo/2018/01/18/21/37/muesli-3091299_960_720.jpg",

  // Add the other 6 image URLs here
];

const roundedSquareMenus = document.getElementsByClassName(
  "rounded-square-menu"
);
for (let i = 0; i < roundedSquareMenus.length; i++) {
  roundedSquareMenus[i].style.backgroundImage = `url(${imageUrls[i]})`;
}

const menuItems = document.getElementsByClassName("item-name");
const coffeeNames = [
  "Espresso by the Beach",
  "Honey Bread",
  "Fresh Veggies",
  "Tea Flower",
  "Pan Ball",
  "Egg Leafy",
  "Ice Cream Choco",
  "Strawberry Melon",
  "Raspbian Dessert",
];

for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].textContent = coffeeNames[i];
}
