const marks = require('fs').readFileSync(0, 'utf8');
function getGrade(marks) {
  if (marks >= 90) return "A+";
  else if (marks >= 80) return "A";
  else if (marks >= 70) return "B";
  else if (marks >= 60) return "C";
  else if (marks >= 50) return "D";
  else return "F - Fail";
}
//let marks = 85;
console.log(`Marks: ${marks}, Grade: ${getGrade(marks)}`);
