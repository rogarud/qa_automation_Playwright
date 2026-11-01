console.log("Enter the number!");
const n = require('fs').readFileSync(0, 'utf8');
for (let i = 1; i <= 10; i++) {
  console.log(`${n} x ${i} = ${n * i}`);
}