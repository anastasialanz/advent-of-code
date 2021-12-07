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

test('power consumption is 198', () => {
  getPowerConsumption(diagnosticReport).toBe(198);
});