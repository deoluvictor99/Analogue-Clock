const secondHand = document.querySelector('.second-hand')
const minuteHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

function getTime() {
    now = new Date();

    const seconds = now.getSeconds();
    secondDegrees = (seconds/60 * 360) + 90 ;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;

    const minutes = now.getMinutes();
    minuteDegrees = (minutes/60 * 360) + 90;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;

    const hours = now.getHours();
    hourDegrees = (hours/12 * 360) + 90
    hourHand.style.transform = `rotate(${hourDegrees}deg)`
}

setInterval(getTime, 1000);