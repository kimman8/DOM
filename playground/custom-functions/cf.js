function calculateBill(billAmount, taxrate = 0.13, tipRate = 0.15) {
  //this is a function
  console.log('running bill!');
  const total = billAmount + billAmount * taxrate + billAmount * tipRate;
  console.log(total);
  return total;
}

// const myTotal = calculateBill(200, 0.1, 0.2);
// console.log(`your total bill is $${myTotal}`);

function doctorize(name) {
  return `Dr.${name}`;
}

function yell(name) {
  return `HEY ${name.toUpperCase()}`;
}
const kimz = doctorize('kim');
console.log(kimz);

const kIMZ = yell('kims');
console.log(kIMZ);
