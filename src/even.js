import readlineSync from 'readline-sync';
import getName from './cli.js';

const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min) + min);

const gameEven = () => {
  const userName = getName();
  console.log('Answer "yes" is the number is even, otherwise answer "no".');
  const successAnswer = 3;

  for (let i = 1; i <= successAnswer; i++) {
    const randomNumber = getRandomNum(1, 100);
    const isEven = randomNumber % 2 === 0;
    const userAnswer = readlineSync.question(`Question : ${randomNumber}\nYour answer: `);
    const oppositeAnswer = userAnswer === 'no' ? 'yes' : 'no';
    const correctAnswer = isEven && userAnswer === 'yes' || !isEven && userAnswer === 'no';
    if (correctAnswer) {
      console.log('Correct!');
    } else if (!correctAnswer) {
      i = 0;
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${oppositeAnswer}".\nLet's try again, ${userName}!`);
    }
  }

  return `Congratulations, ${userName}!`;
};

export default gameEven;
