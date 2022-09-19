import getRandomNum from './shared.js';
import generalLogicGame from './index.js';

const gameRules = 'Answer "yes" is the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;

const getData = () => {
  const randomNumber = getRandomNum(1, 100);
  const question = randomNumber;
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const gameEven = () => generalLogicGame(gameRules, getData);
export default gameEven;
