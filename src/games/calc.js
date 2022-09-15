import readlineSync from 'readline-sync';
import getName from './cli.js';
import { congratulateUser, getRandomNum, showIncorrectAnswerMessage } from './shared.js';

const showGameRules = () => {
  console.log('What is the result of the expression?');
};

function getRandomArrayElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const gameCalc = () => {
  const userName = getName();
  const successAnswer = 3;
  showGameRules();

  const symbolMathOperation = ['+', '-', '*'];
  for (let i = 1; i <= successAnswer; i++) {
    const randomFirstNum = getRandomNum(1, 50);
    const randomSecondNum = getRandomNum(1, 20);
    const randomSymbol = getRandomArrayElement(symbolMathOperation);
    const question = `${randomFirstNum} ${randomSymbol} ${randomSecondNum}`;
    const userAnswer = readlineSync.question(
      `Question: ${question}\nYour answer: `,
    );
    let expectedAnswer = 0;
    switch (randomSymbol) {
      case '+':
        expectedAnswer = randomFirstNum + randomSecondNum;
        break;
      case '-':
        expectedAnswer = randomFirstNum - randomSecondNum;
        break;
      case '*':
        expectedAnswer = randomFirstNum * randomSecondNum;
        break;
      default:
        return null;
    }

    const isCorrectAnswer = expectedAnswer === Number(userAnswer);
    if (isCorrectAnswer) {
      console.log('Correct!');
    } else if (!isCorrectAnswer) {
      i = 0;
      showIncorrectAnswerMessage(userAnswer, expectedAnswer, userName);
    }
  }
  return congratulateUser(userName);
};

export default gameCalc;
