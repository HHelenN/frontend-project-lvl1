import readlineSync from 'readline-sync';
import getName from './cli.js';
import {
  congratulateUser,
  getRandomNum,
  showCorrectAnswerMessage,
  showIncorrectAnswerMessage,
} from './shared.js';

const showGameEvenRules = () => {
  console.log('Answer "yes" is the number is even, otherwise answer "no".');
};

const gameEven = () => {
  const successAnswer = 3;
  const userName = getName();
  showGameEvenRules();

  for (let i = 1; i <= successAnswer; i++) {
    const randomNumber = getRandomNum(1, 100);
    const isEven = randomNumber % 2 === 0;
    const userAnswer = readlineSync.question(
      `Question : ${randomNumber}\nYour answer: `,
    );
    const correctAnswer = (isEven && userAnswer === 'yes') || (!isEven && userAnswer === 'no');
    if (correctAnswer) {
      showCorrectAnswerMessage();
    } else if (!correctAnswer) {
      const expectedAnswer = userAnswer === 'no' ? 'yes' : 'no';
      i = 0;
      showIncorrectAnswerMessage(userAnswer, expectedAnswer, userName);
    }
  }

  congratulateUser(userName);
};

export default gameEven;
