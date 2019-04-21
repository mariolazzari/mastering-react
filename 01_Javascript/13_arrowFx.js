// big arrow function
const square = function(num) {
  return num * num;
};

console.log("function", square(2));

// arrow
const squareAF = num => num * num;
console.log("arrow", squareAF(2));

const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false }
];

const activeJobs = jobs.filter(job => job.isActive);
console.log(activeJobs);
