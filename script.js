const canvas = document.getElementById("forest");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

const colors = ["#00fff7", "#ff00ff", "#8f00ff", "#00ff9d"];
const trees = [];

for (let i = 0; i < 70; i++) {
  trees.push({
    x: Math.random() * canvas.width,
    y: canvas.height,
    h: 150 + Math.random() * 300,
    sway: Math.random() * Math.PI * 2,
    speed: 0.002 + Math.random() * 0.003,
    color: colors[Math.floor(Math.random() * colors.length)]
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  trees.forEach(t => {
    t.sway += t.speed;
    const offset = Math.sin(t.sway) * 12;

    ctx.strokeStyle = t.color;
    ctx.lineWidth = 2;
    ctx.shadowColor = t.color;
    ctx.shadowBlur = 18;

    ctx.beginPath();
    ctx.moveTo(t.x, t.y);
    ctx.lineTo(t.x + offset, t.y - t.h);
    ctx.stroke();
  });

  requestAnimationFrame(draw);
}

draw();
