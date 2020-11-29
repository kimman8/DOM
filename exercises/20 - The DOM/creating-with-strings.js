const item = document.querySelector('.item');
const width = 100;
const src = `https://source.unsplash.com/random/${width}`;
const desc = 'cute pup';
const myHtml = `<div class="wrapper">
<h2>${desc}</h2>
<img src="${src}" alt="${desc}"/>
</div>`;

//turn a string into a DOM element
const myFragment = document.createRange().createContextualFragment(myHtml);

console.log(myFragment);
console.log(myFragment.querySelector('img'));

document.body.appendChild(myFragment);
