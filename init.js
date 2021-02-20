const TICK_RATE = 3000; //never changes const in captials

function tick () {
console.log('tick', Date.now());
}

function init() {
console.log('starting game');

let nextTimeToTick = Date.now();

function nextAnimationFrame() {
const now = Date.now();

if (nextTimeToTick <= now) {
tick();
nextTimeToTick = now + TICK_RATE;
}

requestAnimationFrame(nextAnimationFrame);
}

requestAnimationFrame(nextAnimationFrame);
    }

    init();