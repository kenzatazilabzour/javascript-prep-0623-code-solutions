function addTwoNumbers(num1, num2) {
  const addTwoNumbersResult = num1 + num2;
  return addTwoNumbersResult;
}
console.log('addTwoNumbers Exercise:', addTwoNumbers(2, 2));

function convertHoursToMinutes(hours) {
  const minutes = hours * 60;
  return minutes;
}
console.log('convertHoursToMinutes Exercise:', convertHoursToMinutes(2));

function getGreeting(name) {
  const greeting = 'Hello ' + name + '!';
  return greeting;
}
console.log('getGreeting Exercise:', getGreeting('World'));

function addAndMultiplyBy5(num1, num2) {
  const sum = num1 + num2;
  const result = sum * 5;
  return result;
}
console.log('addAndMultiplyBy5 Exercise:', addAndMultiplyBy5(10, 5));

function multiplyAndDivideBy5(num1, num2) {
  const sum = num1 * num2;
  const result = sum / 5;
  return result;
}
console.log('multiplyAndDivideBy5 Exercise:', multiplyAndDivideBy5(35, 10));

function subtractTwoNumbers(num1, num2) {
  const sum = num1 - num2;
  return sum;
}
console.log('subtractTwoNumbers Exercise:', subtractTwoNumbers(22, 7));

function getCircleCircumference(radius) {
  const circumference = 2 * Math.PI * radius;
  return circumference;
}
console.log('getCircleCircumference Exercise:', getCircleCircumference(5));

function getFullName(firstName, lastName) {
  const fullName = firstName + ' ' + lastName;
  return fullName;
}
console.log('getFullName Exercise:', getFullName('Kenza', 'Tazi'));

function cube(number) {
  const cubeResult = Math.pow(number, 3);
  return cubeResult;
}
console.log('cube Exercise:', cube(5));
