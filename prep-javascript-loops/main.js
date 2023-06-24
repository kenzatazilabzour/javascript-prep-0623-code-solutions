// create your loops here.

function whileLoop1() {
  const newArray = [];
  let i = 0;
  while (i < 10) {
    newArray.push(i);
    i++;
  }
  return newArray;
}
console.log(whileLoop1());

function whileLoop2() {
  const newArray = [];
  let i = 0;
  while (i < 10) {
    newArray.push(i * 2);
    i++;
  }
  return newArray;
}
console.log(whileLoop2());

function forLoop1() {
  const newArray = [];
  for (let i = 0; i < 10; i++) {
    newArray.push(i);
  }
  return newArray;
}
console.log(forLoop1());

function forLoop2() {
  for (let i = 100; i >= 0; i--) {
    console.log('Time till explosion: ' + i);
  }
}
console.log(forLoop2());

function forInLoop1(obj) {
  const newArray = [];
  for (const prop in obj) {
    newArray.push(prop);
  }
  return newArray;
}
const exampleObj = {
  name: 'Kenza',
  age: 28,
  hobby: 'computing',
  invention: 'analytical design',
};
console.log(forInLoop1(exampleObj));

function forInLoop2(obj) {
  const newArray = [];
  for (const prop in obj) {
    newArray.push(obj[prop]);
  }
  return newArray;
}
const secondExampleObj = {
  name: 'Kenza',
  age: 28,
  hobby: 'computing',
  invention: 'analytical design',
};
console.log(forInLoop2(secondExampleObj));
