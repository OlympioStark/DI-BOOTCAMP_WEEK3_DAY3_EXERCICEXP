let distance = 0,
    interval;

function myMove() {
    interval = setInterval(moveRedSquare, 50);
}

function moveRedSquare() {
    const WIDTH_OF_CONTAINER = 400,
        WIDTH_OF_SQUARE = 50;

    if (distance === WIDTH_OF_CONTAINER - WIDTH_OF_SQUARE) return clearInterval(interval);
    distance = distance + 1
    let redSquare = document.getElementById("animate");
    redSquare.style.left = distance + "px"
}