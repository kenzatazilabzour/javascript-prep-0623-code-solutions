const person = {
  firstName: 'Kenza',
  lastName: 'Tazi',
  hobby: 'Tennis',
};
console.log(person);
const fullName = person.firstName + person.lastName;
console.log("The person's name is:", fullName);
person.job = 'Software Engineer';
console.log("The person's current job is:", person.job);
person['previousJob'] = 'UI/UX Design';
console.log("The person's previous job is:", person['previousJob']);
console.log('The complete person:', person);
