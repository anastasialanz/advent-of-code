const diagnosticReport = [
  '00100',
  '11110',
  '10110',
  '10111',
  '10101',
  '01111',
  '00111',
  '11100',
  '10000',
  '11001',
  '00010',
  '01010'
]

function bitArrays(report) {
  let bitArray = [];
  for (let i = 0; i < report.length; i++) {
    // console.log(report[i]);
    console.log(Array.from(report[i], Number));
    bitArray.push(Array.from(report[i], Number));
  }
  console.log(bitArray);
}

bitArrays(diagnosticReport);

function getPowerConsumption(report) {
  // for (let i = 0; i < report.length; i++) {
  //   console.log(report[i]);
  //   console.log(Array.from(report[i], Number));
  // }
}

function gammaRate() {

}

getPowerConsumption(diagnosticReport);