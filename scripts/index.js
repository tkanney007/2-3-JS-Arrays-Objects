//Q1:

//1. Create an array called grades and put the following values: 56, 87, 99, 40
let grades = [56, 87, 99, 40];

//2. Add another element at the end of the array with value: 68
grades.push(68);

//3. Remove the 1st element of the array
grades.shift();

//4. Change 40 to 60.
grades[grades.indexOf(40)] = 60;

for (let value of grades) {
  console.log(value);
}

//5. Create a variable called average and compute for the average of the grades array.
let sum = grades.reduce(sumGrades);

function sumGrades(total, value) {
  return total + value;
}

if (grades.length > 0) {
  console.log("The average of the grades is: " + sum / grades.length);
} else {
  console.log(
    "The average of the grades cannot be calculated because there are no grades entered into the grades array."
  );
}

//Q2:
/*
1. Create an object called vehicle with following properties:
    a. name (String)
    b. brand (String)
    c. year of make (Number)
    b. number of wheels (Number)
    e. isEnvironmentFriendly (Boolean)
*/
let vehicle = {
  name: "Odyssey",
  brand: "Honda",
  yearOfMake: 2020,
  numberOfWheels: 4,
  isEnvironmentFriendly: false,
};

// 2. Use the for-in loop to display both the properties and values of the object.

for (let property in vehicle) {
  console.log(property + " : " + vehicle[property]);
}
