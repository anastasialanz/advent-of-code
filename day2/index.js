const fs = require('fs');
var data = fs.readFileSync('sample-data.txt').toString().split("\n");

function submarineNavigation(positions) {
  let horizontalPos = 0;
  let depth = 0;
  let aim = 0;

  for (let i = 0; i < positions.length; i++) {
    if (positions[i].includes("forward")) {
      horizontalPos += parseInt(positions[i].match(/\d+/g));
    } else if (positions[i].includes("down")) {
      depth += parseInt(positions[i].match(/\d+/g));
    } else if (positions[i].includes("up")) {
      depth -= parseInt(positions[i].match(/\d+/g));
    }
  }
  console.log(horizontalPos * depth);
  return horizontalPos * depth;
};

submarineNavigation(data);

module.exports = submarineNavigation;