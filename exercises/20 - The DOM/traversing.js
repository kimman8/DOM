const kim = document.querySelector('.kim');
// console.log(kim.children);

// console.log(kim.firstElementChild);
// console.log(kim.lastElementChild);
// console.log(kim.previousElementSibiling);
// console.log(kim.nextElementSibling);
// console.log(kim.parentElement);
// console.log(kim.childNodes);

const p = document.createElement('p');
p.textContent = 'i will be removed';
document.body.appendChild(p);
console.log(p);
p.remove();
document.body.appendChild(p);
