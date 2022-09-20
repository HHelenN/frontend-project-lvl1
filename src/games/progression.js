import generalLogicGame from './index.js';
import { getRandomNum } from './shared.js';

const gameRules = 'What number is missing in the progression?';

const getData = () => {
  const firstNum = getRandomNum(1, 50);
  const extra = getRandomNum(2, 5);
  const randomIndex = getRandomNum(1, 9);
  const question = Array.from(Array(10), (item, index) => firstNum + (index * extra));
  const correctAnswer = question[randomIndex];
  question[randomIndex] = '...';
  return [question, correctAnswer];
};

const gameProgression = () => generalLogicGame(gameRules, getData);
export default gameProgression;
