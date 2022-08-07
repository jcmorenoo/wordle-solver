const { solutions } = require('./wordle.json');

const LAUNCH_DATE = new Date(2021,5,19,0,0,0,0);
const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;

function getDayOffset() {
    const today = (new Date()).setHours(0, 0, 0, 0);
    const timePassed = today - LAUNCH_DATE;
    return Math.round(timePassed / MILLISECONDS_PER_DAY);
}

console.log('Today\'s solution:', solutions[getDayOffset()]);
console.log('Tomorrow\'s solution:', solutions[getDayOffset() + 1]);
