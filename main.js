// main.js
console.log("PastPort site loaded successfully!");

// Example interactivity: alert when model is clicked
document.addEventListener("DOMContentLoaded", () => {
  const viewer = document.querySelector("model-viewer");
  viewer.addEventListener("click", () => {
    alert("You clicked the 3D heritage model!");
  });
});
