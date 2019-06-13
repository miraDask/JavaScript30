const secondsHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function calcDegrees(timeUnit, divisor) {
    return ((timeUnit / divisor) * 360) + 90;
}

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    const secondsDegrees = calcDegrees(seconds, 60);
    const minutesDegrees = calcDegrees(minutes, 60);
    const hoursDegrees = calcDegrees(hours, 12);

    secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

    secondsHand.style.transition = secondsDegrees === 90 ? 'all 0s' : 'all 0.05s';
    minHand.style.transition = minutesDegrees === 90 ? 'all 0s' : 'all 0.05s';
}

setInterval(setDate, 1000);
