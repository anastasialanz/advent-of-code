const fs = require('fs');
// fs - file system module in Node.js
// readFileSync returns the contents of the path
var data = fs.readFileSync('data.txt').toString().split("\n").map(Number);


// don't use for...in to iterate over an Array where index order is important
// compare indexes in array
// const sonarSweep = [1, 2, 3];

function measurementCount(report) {
  // console.log(report.length);
  let increaseCount = 0;
  for (let i = 0; i < report.length; i++) {
    // console.log(typeof report[i]);
    if (report[i] > report[i - 1]) {
      increaseCount++;
    }
  }
  return increaseCount;
}

measurementCount(data);


// day 1, part 2
function slidingSum(data) {
  let slidingWindowSums = [];
  for (let i = 0; i < data.length; i++) {
   slidingWindowSums.push(data[i] + data[i + 1] + data[i + 2]);
  }
  console.log(measurementCount(slidingWindowSums));
  return measurementCount(slidingWindowSums);
}

slidingSum(data);

module.exports = { measurementCount, slidingSum };
