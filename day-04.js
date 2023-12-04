const startTime = new Date().getTime();
const dayNumber = '04';

// load the file
const fs = require('fs');
const path = require('path');
const appData = fs.readFileSync(path.resolve(__dirname, `day-${dayNumber}.txt`), 'utf8').split('\n');

let solutionPart1 = 0;
const solutionPart2 = [];

let cardIndex = 0;

appData.forEach((line) => {
  const parts = line.split(': ');
  const cards = parts[1].split(' | ');

  const winningNumbers = cards[0].split(/\s+/).filter(elm => elm);
  const scratchedNumbers = cards[1].split(/\s+/).filter(elm => elm);

  let score = 0;
  let matches = 0;

  scratchedNumbers.forEach((number) => {
    if (winningNumbers.includes(number)) {
      if (score > 0) {
        score = (score * 2);
        matches += 1;
      } else {
        score += 1
        matches += 1
      }
    }
  })

  solutionPart1 += score;

  cardIndex += 1;

  solutionPart2.push(cardIndex)

  const amountInMemory = solutionPart2.filter((v) => (v === cardIndex)).length;

  for (let i = 0; i < amountInMemory; i += 1) {
    for (let j = 1; j < matches + 1; j += 1) {
      solutionPart2.push(cardIndex + j)
    }
  }

  })

console.log('Solution part 1:', solutionPart1);
console.log('Solution part 2:', solutionPart2.length);

const endTime = new Date().getTime();
const executionTime = endTime - startTime;
console.log('Execution Time:', executionTime, 'ms');