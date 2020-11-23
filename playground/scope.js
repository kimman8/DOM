// // function go() {
// //   const hair = 'blonde';
// //   console.log(hair);
// //   console.log(age);
// // }
// // go();
// // console.log(age);
// function isCool(name) {
//   let cool;

//   if (name === 'kim') {
//     cool = true;
//   }
//   console.log(cool);
//   return cool;
// }

// //let and const are block scoped whilst var is function scoped

const dog = 'Snickers';
function logDog() {
  console.log(dog);
}

function go() {
  const dog = 'sunny';
  logDog();
}
go();

function sayHi(name) {
  function yell() {
    console.log(name.toUpperCase());
  }
  yell();
}
