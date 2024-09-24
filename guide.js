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



function setup() {
  createCanvas(600, 400);
  rectMode(CENTER);
  noStroke();
  fill(255); // White background
}

function draw() {
  background(255); // Uncomment this line if you want a white background
  // rect(width / 2, height / 2, 200, 100); // Comment out this line to remove the rectangle

  // Display the menu items within the rectangle with black text
  textAlign(CENTER, CENTER);
  textSize(32);

  // Bold "INSTRUCTIONS"
  push(); // Push a new style state
  fill(0); // Black text
  textStyle(BOLD); // Make "INSTRUCTIONS" bold
  text("INSTRUCTIONS ", width / 2, height / 2 - 60);
  pop(); // Pop the style state to reset font style

  textSize(20);
  fill(0); // Black text
  text("🎀**Click** on the piano keys ", width / 2, height / 2 - 30);
    text("or **tap** the corresponding letters to play a sound.", width / 2, height / 2 );
  text("🎀Have fun exploring and interacting", width / 2, height / 2 + 30);
    text("with the piano and other elements!", width / 2, height / 2 + 60);
}