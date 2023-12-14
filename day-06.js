const startTime = new Date().getTime();
const dayNumber = '06';

// load the file
const fs = require('fs');
const path = require('path');
const appData = fs.readFileSync(path.resolve(__dirname, `day-${dayNumber}.txt`), 'utf8').split('\n');

// part 1
let solutionPart1 = 1;
const times = appData[0].split(' ').filter(Boolean).slice(1)
const distances = appData[1].split(' ').filter(Boolean).slice(1)

for (let i = 0; i < times.length; i += 1) {
  const time = parseInt(times[i], 10)
  const options = [];

  for (let j = 1; j < time; j += 1) {
    const timeLeftAfterRelease = time - j;
    const distanceTraveled = j * timeLeftAfterRelease;
    if (distanceTraveled >= distances[i]) {
      options.push(j)
    }
  }

  solutionPart1 = solutionPart1 * options.length
}

console.log('solutionPart1', solutionPart1);

// part 2
let solutionPart2 = 0;
const time = parseInt(times.toString().replaceAll(',', ''), 10)
const distance = parseInt(distances.toString().replaceAll(',', ''), 10)

for (let j = 1; j < time; j += 1) {
  const timeLeftAfterRelease = time - j;
  const distanceTraveled = j * timeLeftAfterRelease;
  if (distanceTraveled >= distance) {
    solutionPart2 += 1;
  }
}

console.log('solutionPart2', solutionPart2);


const endTime = new Date().getTime();
const executionTime = endTime - startTime;
console.log('Execution Time:', executionTime, 'ms');