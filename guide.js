const menuButton = document.getElementById("hamcontainer");
const popupMenu = document.getElementById("popup-menu");
const closeButton = document.getElementById("close-button");

menuButton.addEventListener("click", function() {
  popupMenu.classList.add("open");
  console.log("success!");
});

closeButton.addEventListener("click", function() {
  popupMenu.classList.remove("open");
});