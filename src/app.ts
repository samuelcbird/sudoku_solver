import { clearBoard } from './functions/clearBoard.js';
import { handleSolution } from './functions/handleSolution.js';
import { toggleTheme } from './functions/toggleTheme.js';
import { themeButton, sudokuContainer, NumberType, solveButton, puzzleArray, clearButton } from './GlobalVariables.js';

// themeCheckbox.addEventListener('click', toggleTheme);
solveButton.addEventListener('click', handleSolution);
themeButton.addEventListener('click', () => {
    themeButton.classList.toggle('isflipped');
    toggleTheme();
})
clearButton.addEventListener('click', () => {
        clearBoard(puzzleArray);
});

const createDivs = () => {
    for (let i = 0; i < 81; i++) {
        const elem = document.createElement('div');
        elem.contentEditable = 'true';
    
        // check for valid input
        elem.addEventListener('input', () => {
            if (elem.innerText === '') {
                if (elem.classList.contains('invalid')) {
                    elem.classList.remove('invalid');
                }
            }
            if (/\D/.test(elem.innerText)) {
                elem.classList.add('invalid');
            } else if (elem.innerText.length >= 2) {
                elem.classList.add('invalid');
            } else {
                if (elem.classList.contains('invalid')) {
                    elem.classList.remove('invalid');
                } 
            }
        })
        puzzleArray.push([elem, NumberType.empty]);
        sudokuContainer.append(elem);
    }
}

createDivs();
