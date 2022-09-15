export const congratulateUser = (userName) => {
  console.log(`Congratulations, ${userName}`);
};

export const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min) + min);

export const isAnswerCorrect = (answer, expected) => answer === expected;

export const showCorrectAnswerMessage = () => {
  console.log('Correct!');
};

export const showIncorrectAnswerMessage = (answer, expected, userName) => {
  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${expected}".\nLet's try again, ${userName}!`);
};
