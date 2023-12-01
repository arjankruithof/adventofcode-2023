const startTime = new Date().getTime();
const dayNumber = '01';

// load the file
const fs = require('fs');
const path = require('path');
const appData = fs.readFileSync(path.resolve(__dirname, `day-${dayNumber}.txt`), 'utf8').split('\n');

// part 1
let solutionPart1 = 0;

appData.forEach((line) => {
  line = line.replace(/[^0-9]/g, '');
  const first = line.charAt(0);
  const last = line.charAt(line.length - 1);

  solutionPart1 += parseInt(`${first}${last}`, 10);
})

console.log('Solution part 1:', solutionPart1);

// part 2
let solutionPart2 = 0;

const numbers = {
  one: 'one1one',
  two: 'two2two',
  three: 'three3three',
  four: 'four4four',
  five: 'five5five',
  six: 'six6six',
  seven: 'seven7seven',
  eight: 'eight8eight',
  nine: 'nine9nine'
}

appData.forEach((line) => {
  Object.keys(numbers).forEach((num) => {
    line = line.replaceAll(num, numbers[num])
  })

  line = line.replace(/[^0-9]/g, '');

  const first = line.charAt(0);
  const last = line.charAt(line.length - 1);

  solutionPart2 += parseInt(`${first}${last}`, 10);
});

console.log('Solution part 2:', solutionPart2);
const endTime = new Date().getTime();
const executionTime = endTime - startTime;
console.log('Execution Time:', executionTime, 'ms');


