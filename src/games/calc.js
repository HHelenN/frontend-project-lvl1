import { getRandomNum } from '../shared.js';
import generalLogicGame from '../index.js';

const gameRules = 'What is the result of the expression?';

const getRansomArrElement = (arr) => arr[Math.floor(Math.random() * arr.length)];
const getCorrectAnswer = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return false;
  }
};
const getData = () => {
  const symbolMathOperation = ['+', '-', '*'];
  const randomNum1 = getRandomNum(1, 50);
  const randomNum2 = getRandomNum(1, 10);
  const randomSymbol = getRansomArrElement(symbolMathOperation);
  const correctAnswer = getCorrectAnswer(randomNum1, randomNum2, randomSymbol);
  const question = `${randomNum1} ${randomSymbol} ${randomNum2}`;
  return [question, correctAnswer];
};

const gameCalc = () => generalLogicGame(gameRules, getData);
export default gameCalc;
