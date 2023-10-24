/* 
Filename: AdvancedGraphics.js 
Content: Advanced graphics rendering using canvas
*/

// Initialize canvas element
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Define variables for shapes
const rects = [
  { x: 50, y: 50, width: 100, height: 100, color: "red" },
  { x: 200, y: 100, width: 150, height: 120, color: "blue" },
  { x: 350, y: 200, width: 80, height: 200, color: "green" },
];

const circles = [
  { x: 200, y: 300, radius: 50, color: "orange" },
  { x: 400, y: 150, radius: 80, color: "purple" },
];

// Define rendering function
function render() {
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Render rectangles
  for (let i = 0; i < rects.length; i++) {
    const rect = rects[i];
    ctx.fillStyle = rect.color;
    ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
  }

  // Render circles
  for (let i = 0; i < circles.length; i++) {
    const circle = circles[i];
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
    ctx.fillStyle = circle.color;
    ctx.fill();
    ctx.closePath();
  }
}

// Execute rendering function
render();