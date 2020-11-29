const myPara = document.createElement('p');
myPara.textContent = 'i am a p';
myPara.classList.add('special');
console.log(myPara);

const myImage = document.createElement('img');
myImage.src = 'https://source.unsplash.com/random/300x300';
myImage.alt = 'nice photo';
console.log(myImage);

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

myDiv.appendChild(myPara);
myDiv.appendChild(myImage);
document.body.appendChild(myDiv);

const heading = document.createElement('h2');

heading.textContent = 'cool tingz';
myDiv.insertAdjacentElement('afterbegin', heading);

const unorderedList1 = document.createElement('ul');
const li1 = document.createElement('li');
li1.textContent = 'banannas';

const li2 = document.createElement('li');
li2.textContent = 'strawberries';

const li3 = document.createElement('li');
li3.textContent = 'kiwis';

const li4 = document.createElement('li');
li4.textContent = 'oranges';

const beginnerLi = document.createElement('li');
beginnerLi.textContent = 'grapes';

const afterEndz = document.createElement('li');
afterEndz.textContent = 'afterendzlesss';

unorderedList1.appendChild(li1);
unorderedList1.appendChild(li2);
unorderedList1.appendChild(li3);
unorderedList1.appendChild(li4);
unorderedList1.insertAdjacentElement('afterend', unorderedList1);
unorderedList1.insertAdjacentElement('beforebegin', unorderedList1);

document.body.appendChild(unorderedList1);
document.body.insertAdjacentElement('afterend', unorderedList1);

const list = document.createElement('ul');

const li = document.createElement('li');
li.textContent = 'three';
list.appendChild(li);
document.body.insertAdjacentElement('beforebegin', list);
const li5 = document.createElement('li');
li5.textContent = 'five';
document.body.insertAdjacentElement('beforebegin', list);
list.append(li5);

const li11 = li5.cloneNode(true);
li11.textContent = 'first';
const liTwo = li5.cloneNode(true);
liTwo.textContent = 'two';
list.insertAdjacentElement('afterbegin', li11);
list.insertAdjacentElement('beforened', liTwo);
