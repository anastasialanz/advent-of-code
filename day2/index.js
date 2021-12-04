const fs = require('fs');
var data = fs.readFileSync('sample-data.txt').toString().split("\n");

function submarineNavigation(positions) {
  let horizontalPos = 0;
  let depth = 0;
  let aim = 0;

  for (let i = 0; i < positions.length; i++) {
    if (positions[i].includes("forward")) {
      horizontalPos += parseInt(positions[i].match(/\d+/g));
      if (aim > 0) {
        depth += (aim * parseInt(positions[i].match(/\d+/g)));
      }
    } else if (positions[i].includes("down")) {
      aim += parseInt(positions[i].match(/\d+/g));
    } else if (positions[i].includes("up")) {
      aim -= parseInt(positions[i].match(/\d+/g));
    }
  }
  console.log(horizontalPos * depth, horizontalPos, depth, aim);
  return horizontalPos * depth;
};

submarineNavigation(data);

module.exports = submarineNavigation;