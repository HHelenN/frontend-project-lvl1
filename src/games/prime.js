import generalLogicGame from '../index.js';
import { getRandomNum } from '../shared.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) if (num % i === 0) return false;
  return num > 1;
};
const getData = () => {
  const num = getRandomNum(2, 100);
  const question = num;
  const correctAnswer = isPrime(num) ? 'yes' : 'no';
  return [question, correctAnswer];
};
const gamePrime = () => generalLogicGame(gameRules, getData);

export default gamePrime;
