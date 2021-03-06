export const body = document.querySelector('body');
export const themeButton = document.querySelector('#card');
export const solveButton = document.querySelector('#solve_button');
export const clearButton = document.querySelector('#clear_button');
export const clearButtonTextElem = document.querySelector("#clear_button > span");
export const allButtons = document.querySelectorAll('button');
export const allBodyLinks = document.querySelectorAll('a.link');
export const sudokuContainer = document.getElementById('sudoku_container');
export const errorMessageDiv = document.querySelector('#error_message');
export const descriptionDiv = document.querySelector('#description');
export const toggleClearButtonText = () => {
    if (clearButtonTextElem.innerText === 'clear') {
        clearButtonTextElem.innerText = 'stop';
    }
    else {
        clearButtonTextElem.innerText = 'clear';
    }
};
export const puzzleArray = [];
export var NumberType;
(function (NumberType) {
    NumberType[NumberType["locked"] = 0] = "locked";
    NumberType[NumberType["empty"] = 1] = "empty";
})(NumberType || (NumberType = {}));
