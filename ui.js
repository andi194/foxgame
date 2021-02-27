exposrt const modFox = function modFox(state) {
    document.querySelector('.fox')className = `fod fox-${state}`;
}

export const modScene = function modScene(state) {
    document.querySelector('.game)').className = `game $(state)`;
}

export cons togglePoopBag = function togglePoopBat(show) {
    document.querySelector('.poop-bag').classList.toggle("hidden", !show);
};

export const writeModal = function writeModal (text = "") {
    document.querySelector('.modal').innerHTML = `<div class="modal-inner">${text}</div>`;
};