import generalLogicGame from './index.js';
import { getRandomNum, getGcd } from './shared.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const getData = () => {
  const num1 = getRandomNum(1, 20);
  const num2 = getRandomNum(1, 20);
  const question = `${num1} ${num2}`;
  const correctAnswer = getGcd(num1, num2);
  return [question, correctAnswer];
};

const gameGcd = () => generalLogicGame(gameRules, getData);
export default gameGcd;
