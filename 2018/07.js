const fs = require('fs');
const runTest = require('./test');
const tests = require('./tests/07.test');

runTest(solve, tests.suite1);
// runTest(solve2, tests.suite2);

fs.readFile('./inputs/07.input', 'utf8', (err, data) => {
  if (err) throw err;
  const input = data.trim();
  console.log(`Part 1: ${solve(input)}`);
//  console.log(`Part 2: ${solve2(input)}`);
});

function solve(input) {
  const steps = input.split('\n').map(line => ({req: line.split(' ')[1], step: line.split(' ')[7]}));
  let sequences = [];
  steps.forEach(s => {
    let found = false;
    if (sequences.length === 0) {
      sequences.push(s.req + s.step);
    } else {
      sequences.forEach((seq, idx) => {
        if (seq[seq.length - 1] === s.req) {
          sequences[idx] = seq + s.step;
          found = true;
        }
        if (seq[0] === s.step) {
          sequences[idx] = s.req + seq;
          found = true;
        }
      });
      if (!found) {
        sequences.push(s.req + s.step);
      }
    }
  });
  steps.forEach(s => {
    sequences.forEach((seq, idx) => {
      if (seq[seq.length - 1] === s.req) {
        sequences[idx] = seq + s.step;
      }
      if (seq[0] === s.step) {
        sequences[idx] = s.req + seq;
      }
    });
  });

  sequences = sequences.sort();
  console.log(sequences);
  /*
  let solution = sequences[0];
  for (let i = 1; i < sequences.length; i++) {
    const s = sequences[i];
    console.log('trying to add', s, 'to', solution);
    for (let j = 0; j < s.length; j++) {
      if (solution.indexOf(s[j]) === -1 && solution.indexOf(s[j-1]) > -1) {
        findNextCommonIdx(solution, s, j, -1);
        const from = findNextCommonIdx(solution, s, s[j], -1),
              to = findNextCommonIdx(solution, s, s[j], 1);
        console.warn('finding a place for', s[j], 'between', from, to);
        let inserted = false;
        for (let k = from; k < to; k++) {
          if (s[j] < solution[k]) {
            console.log(s[j], '<', solution[k]);
            solution = solution.substring(0, k) + s[j] + solution.substring(k);
            inserted = true;
            break;
          };
        }
        if (!inserted) {
          solution = solution.substring(0, to) + s[j] + solution.substring(to);
        }
        console.log('-->', solution);
      };
    }
  };
  return solution;*/
}

function findNextCommonIdx(a, b, bIdx, direction) {
  if (direction === -1) {
  }
}

function solve2(input) {
}