const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combined = arr1.concat(arr2);
console.log("concat:", combined);

// spread operator and new items
const combined2 = [...arr1, "a", ...arr2, "b"];
console.log("spread:", combined2);

// clone array
const clone = [...arr1];
console.log("clone", clone);

// merge objects
const first = { name: "Mario" };
const second = { age: 44 };
const merged = { ...first, ...second, sex: "M" };
console.log("Merged", merged);

// object clone
const clonedObj = { ...merged };
console.log("Cloned", clonedObj);
