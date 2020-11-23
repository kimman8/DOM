// // function doctorize(name) {
// //   return `Dr.${name}`;
// // }

// const {  doc } = require('prettier');

// const fuctorize = function (name) {
//   return `Dr.${name}`;
// };

// const cuntsToCM = inches => inches * 2.54;

// function add(a, b = 2) {
//   return a + b;
// }

// const adder = (a, b = 2) => a + b;

// const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });

//IIFE
//IMMEDIATELY INVOKED FUNCTIONE XPRESSION

// (function (age) {
//   console.log('running the anon function');
//   return `you are cool and your age is ${age}.`;
// })(10);

//METHODS
const person = {
  name: 'kim',
  //method!
  sayHi: function () {
    console.log(this);
    console.log(`hi ${this.name}`);
    return `hiy ${this.name}`;
  },
  //shorthand method
  yellHi() {
    console.log(this);
    console.log('HI KIIIIM!');
  },
  //arrow function
  whisper: () => {
    console.log('hiiii kiiim');
  },
};

// function yellHi() {
//   console.log('yellHi!');
// }
//callback function
function handleClick() {
  console.log('great clickin');
}
const button = document.querySelector('.clickMe');
// console.log(button);
button.addEventListener('click', function () {
  console.log('fuck yeeee!');
});

setTimeout(() => {
  console.log('succcc ma bit!!!!!!');
}, 3200);
