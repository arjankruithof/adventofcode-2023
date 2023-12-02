const startTime = new Date().getTime();
const dayNumber = '02';

// load the file
const fs = require('fs');
const path = require('path');
const appData = fs.readFileSync(path.resolve(__dirname, `day-${dayNumber}.txt`), 'utf8').split('\n');

function hasEnough([amount, color]) {
  const number = parseInt(amount, 10);
  
  if (color === 'red' && number <= 12) {
    return true;
  }

  if (color === 'green' && number <= 13) {
    return true;
  }

  if (color === 'blue' && number <= 14) {
    return true;
  }

  return false
}

let solutionPart1 = 0;
let solutionPart2 = 0;

appData.forEach((line) => {
  const parts = line.split(': ');
  const gameNumber = parseInt(parts[0].split(' ')[1], 10);

  const games = parts[1].split('; ');

  let canfinishgame = true;

  const red = [];
  const green = [];
  const blue = [];

  games.forEach((game) => {

    const sets = game.split(', ');

    sets.forEach((set) => {
      const turn = set.split(' ');
      const count = parseInt(turn[0], 10)

      if (canfinishgame) {
        canfinishgame = hasEnough(turn);
      }

      if (turn[1] === 'red') {
        red.push(count)
      }

      if (turn[1] === 'green') {
        green.push(count)
      }

      if (turn[1] === 'blue') {
        blue.push(count)
      }
    })
  })

  if (canfinishgame) {
    solutionPart1 += gameNumber
  }

  solutionPart2 += (Math.max(...red) * Math.max(...green) * Math.max(...blue))

})

console.log('Solution part 1:', solutionPart1);
console.log('Solution part 2:', solutionPart2);