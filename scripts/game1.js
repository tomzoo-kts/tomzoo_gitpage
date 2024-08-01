const canvas1 = document.getElementById('gameCanvas1');
const context1 = canvas1.getContext('2d');

let x = canvas1.width / 2;
let y = canvas1.height - 30;
let dx = 2;
let dy = -2;
const ballRadius = 10;

function drawBall() {
    context1.beginPath();
    context1.arc(x, y, ballRadius, 0, Math.PI * 2);
    context1.fillStyle = "#0095DD";
    context1.fill();
    context1.closePath();
}

function draw() {
    context1.clearRect(0, 0, canvas1.width, canvas1.height);
    drawBall();

    if(x + dx > canvas1.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy > canvas1.height - ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }

    x += dx;
    y += dy;
}

setInterval(draw, 10);
