function getRandomNumber (size) {
    return Math.floor(Math.random() * size);
};

function getDistance (event, target) {
    let diffX = event.offsetX - target.x;
    let diffY = event.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
};

function getDistanceHint (distance) {
    if (distance < 10) {
        return "Обпечешся!";
    } else if (distance < 20) {
        return "Дуже гаряче!";
    } else if (distance < 40) {
        return "Гаряче!";
    } else  if (distance < 80) {
        return "Тепло";
    } else if (distance < 160) {
        return "Холодно!";
    } else if (distance < 320) {
        return "Дуже холодно!";
    } else {
       return "Замерзнеш!" 
    }
};

const width = 600; 
const height = 400;
let clicks = 0;

let target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
};

$('#map').click(function(event) {
    clicks++;

    let distance = getDistance(event, target);
    let distanceHint = getDistanceHint(distance);
    $("#distance").text(distanceHint);

    if (distance < 8) {
    alert("Скарб знайдений! Зроблено кліків: " + clicks);
}
});
