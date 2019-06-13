const secondsHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function calcDegrees(timeUnit) {
    let totalUnits = 60;
    if (timeUnit === 'hours') {
        totalUnits = 12;
    }

    return ((timeUnit / totalUnits) * 360) + 90;
}

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    const secondsDegrees = calcDegrees(seconds);
    const minutesDegrees = calcDegrees(minutes);
    const hoursDegrees = calcDegrees(hours);

    secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);
setDate();