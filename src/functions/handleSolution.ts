import { SolvePuzzle } from "../classes/SolvePuzzle.js";
import { errorMessageDiv, NumberType, puzzleArray } from "../GlobalVariables.js"

export const handleSolution = () => {
    for (let i = 0; i < puzzleArray.length; i++) {
        if (puzzleArray[i][0].classList.contains('invalid')) {
            const myError = document.createElement('p');
            myError.innerText = 'Please only enter numbers 1 - 9 in the grid.';
            errorMessageDiv.append(myError);
            return
        } else {
            errorMessageDiv.innerHTML = '';
        }
    }
    puzzleArray.forEach(square => {
        square[0].contentEditable = 'false';

        if (square[0].innerText !== '') {
            square[1] = NumberType.locked;
            square[0].classList.add('boldify');
        }
    })

    const solution = new SolvePuzzle(puzzleArray);
    // possibly use worker to add counter and time solution
}