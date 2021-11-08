const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

const mouse = {
  x: 0,
  y: 0,
};

addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

addEventListener("resize", (e) => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  init();
});

const colors = ["#966F2A", "#E0DFDC", "#966F2A", "#06274A", "#8A8F94"];

const randomColor = () => colors[Math.floor(Math.random() * colors.length)];

const randomIntFromRange = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

class Object {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
  }

  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    c.fillStyle = this.color;
    c.fill();
    c.stroke();
    c.closePath();
  }

  update() {
    this.draw();
  }
}

let objects;

const init = () => {
  objects = [];
  for (let i = 0; i < 10; i++) {
    // objects.push();
  }
};

const animate = () => {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);

  c.fillText("Canvas Boilerplate", mouse.x, mouse.y);
  // objects.forEach(object => {
  //  object.update()
  // })
};

init();
animate();
