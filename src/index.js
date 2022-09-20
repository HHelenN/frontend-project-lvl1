import readlineSync from 'readline-sync';
import getName from './games/cli.js';

const generalLogicGame = (gameRules, getData) => {
  const userName = getName();
  const roundsCount = 3;
  console.log(gameRules);
  for (let i = 1; i <= roundsCount; i += 1) {
    const [question, correctAnswer] = getData();
    const userAnswer = readlineSync.question(
      `Question: ${question}\nYour answer: `,
    );
    if (String(userAnswer) === String(correctAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default generalLogicGame;
