import readlineSync from 'readline-sync';
import getName from './games/cli.js';

const generalLogicGame = (gameRules, getData) => {
  const userName = getName();
  const roundsCount = 3;
  console.log(gameRules);
  for (let i = 1; i <= roundsCount; i++) {
    const [question, correctAnswer] = getData();
    const userAnswer = readlineSync.question(
      `Question: ${question}\nYour answer: `,
    );
    if (String(userAnswer) === String(correctAnswer)) {
      console.log('Correct!');
    } else {
      i = 0;
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${userName}!`);
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default generalLogicGame;