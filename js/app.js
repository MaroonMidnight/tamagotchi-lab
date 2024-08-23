/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/

const state = {
    boredom: 0,
    hunger: 0,
    sleepiness: 0
};

let timer;
let gameOver = false;

/*------------------------ Cached Element References ------------------------*/

const boredomStatEl = document.querySelector('#boredom-stat')
const hungerStatEl = document.querySelector('#hunger-stat')
const sleepinessStatEl = document.querySelector('#sleepiness-stat')
const playBtnEl = document.querySelector('#play')
const feedBtnEl = document.querySelector('#feed')
const sleepBtnEL = document.querySelector('#sleep')
const gameMessageEl = document.querySelector('#message')
const resetBtnEl = document.querySelector('#restart')

const btnWrapper = document.querySelector('.button-wrapper')
/*-------------------------------- Functions --------------------------------*/

function init() {
    gameMessageEl.classList.add('hidden')
    resetBtnEl.classList.add('hidden')
    state.boredom = 0,
    state.hunger = 0,
    state.sleepiness = 0
    gameOver = false
    const runGame = () => {
        updateStates()
        checkGameOver()
        render()
    }
    
    timer = setInterval(runGame, 2000)
    
}

function render() {
    boredomStatEl.textContent = state.boredom,
    hungerStatEl.textContent = state.hunger,
    sleepinessStatEl.textContent = state.sleepiness
    if(gameOver === true){
        clearInterval(timer);
        gameMessageEl.classList.remove('hidden')
        resetBtnEl.classList.remove('hidden')
    }
}

function updateStates() {
    state.boredom += Math.floor(Math.random() * 4)
    state.hunger += Math.floor(Math.random() * 4)
    state.sleepiness += Math.floor(Math.random() * 4)
}

function checkGameOver() {
    if(state.boredom >= 10 || state.hunger >= 10 || state.sleepiness >= 10) {
        gameOver = true;
    }
}

function playBtnClick () {
    state.boredom = 0,
    render()
}

function feedBtnClick () {
    state.hunger = 0,
    render()
}

function sleepBtnClick () {
    state.sleepiness = 0,
    render()
}


checkGameOver();
render();
init();
/*----------------------------- Event Listeners -----------------------------*/

// btnWrapper.addEventListener('click',(event) => {
// if(event.target.classList.children.contains('play')) {
//     state.boredom = 0;
//     }
//     if(event.target.classList.children.contains('feed')) {
//         state.hunger = 0;
//     }
//     if(event.target.classList.children.contains('sleep')) {
//         state.sleepiness = 0;
//     }
// })
playBtnEl.addEventListener('click', playBtnClick)
feedBtnEl.addEventListener('click', feedBtnClick)
sleepBtnEL.addEventListener('click', sleepBtnClick)
resetBtnEl.addEventListener('click', init)