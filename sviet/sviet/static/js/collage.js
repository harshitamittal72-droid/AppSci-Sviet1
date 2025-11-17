// Run once after the page loads (or call in DOMContentLoaded)
(function fixTileHeights() {
  const grid = document.querySelector(".grid-collage .right-grid");
  if (!grid) return console.warn("no .right-grid found");

  // Choose targetHeight: either a fixed px, or compute from the CSS row size
  const targetHeight = 240; // px — change to your desired height
  // const targetHeight = parseFloat(getComputedStyle(grid).getPropertyValue('grid-auto-rows')) || 240;

  Array.from(grid.children).forEach((ch) => {
    ch.style.height = targetHeight + "px";
    ch.style.minHeight = targetHeight + "px";
    // ensure img fills
    const img = ch.querySelector("img");
    if (img) {
      img.style.width = "100%";
      img.style.height = "100%";
      img.style.objectFit = "cover";
    }
  });

  console.log("right-grid tiles forced to", targetHeight, "px");
})();
