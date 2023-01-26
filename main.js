const kelvin = 300;
// creating a constant variable so the value of kelvin stays the same 

const celsius = kelvin - 273;
//converting kelvin to celsius 

var fahrenheit = celsius * (9/5) + 32;
// creating a variable to convert celsius to fahrenheit, allowing us to change this variable as needed 

var fahrenheit = Math.floor(fahrenheit);
// rounding the result of the celsius > fahrenheit conversion down to a whole number

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

var Newton = celsius * (33/100)

var Newton = Math.floor(Newton);

console.log(`The temperature is ${Newton} degrees Newton.`);
