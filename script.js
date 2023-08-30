const toggleButton = document.getElementById("toggleButton");
const collapsibleContainer = document.getElementById("collapsibleContainer");

toggleButton.addEventListener("click", () => {
  collapsibleContainer.classList.toggle("open");
  toggleButton.classList.toggle("flip"); // Toggle the "flip" class
});
