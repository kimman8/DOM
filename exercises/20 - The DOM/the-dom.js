// const p = document.querySelector('p');
// console.log(p);
// const divs = document.querySelector('.item img');
// const item2 = document.querySelector('.item2');
// console.log(divs);
// console.log(item2);
// const img2 = item2.querySelector('img');
// console.log(img2);

// const { doc } = require("prettier");

// const heading = document.querySelector('h2');
// // console.log(heading);
// // heading.textContent = 'kim is a sik kent';
// console.log(heading.textContent);
// console.log(heading.innerText);

// console.log(heading.innerHTML);
// const pizzaList = document.querySelector('.pizza');
// console.log(pizzaList.textContent);

// pizzaList.textContent = `${pizzaList.textContent} 🔊`;
// pizzaList.insertAdjacentText('beforeend', '♠');

//classes!
const pic = document.querySelector('.nice');
console.log(pic.classList);
pic.classList.add('dog');
pic.classList.remove('cool');
pic.classList.add('round');

function toggleRound() {
  pic.classList.toggle('round');
}
pic.addEventListener('click', toggleRound);
pic.alt = 'cute pup'; //setter
console.log(pic.alt); //getter
pic.width = 200;

pic.addEventListener('load', function () {
  console.log(pic.naturalWidth); //getter
});
pic.setAttribute('kim-is-cool', 'REALLY CUTE PUP');
console.log(pic.getAttribute('alt'));
pic.setAttribute('kimy-is-cool', 'REALLY yyyCUTE PUP');
const custom = document.querySelector('.custom');
console.log(custom.dataset);
custom.addEventListener('click', function () {
  alert(`welcome ${custom.dataset.name} ${custom.dataset.last}!`);
});
