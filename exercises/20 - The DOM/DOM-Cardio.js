// Make a div
const myDiv = document.createElement('div');
// add a class of wrapper to it
myDiv.classList.add('wrapper');

// put it into the body
document.body.appendChild(myDiv);
// make an unordered list
const UL = `<ul>
<li>one</li>
<li>two</li>
<li>three</li>
</ul>
`;
// add three list items with the words "one, two, three" in them

// put that list into the above wrapper
myDiv.innerHTML = UL;
console.log(myDiv);
// create an image
const myImg = document.createElement('img');
// set the source to an image
myImg.src = 'https://picsum.photos/500';
// set the width to 250
myImg.width = 250;
myImg.height = 250;
// add a class of cute
myImg.classList.add('cute');
// add an alt of Cute Puppy
myImg.alt = 'cute puppy';
// Append that image to the wrapper
myDiv.appendChild(myImg);

// with HTML string, make a div, with two paragraphs inside of it
const myHTML = `<div class = 'myDiv1'>
<p>yo</p>
<p>yo1</p>

</div>`;
// put this div before the unordered list from above
const ULElement = myDiv.querySelector('ul');
console.log(ULElement);
ULElement.insertAdjacentHTML('beforebegin', myHTML);
// add a class to the second paragraph called warning
console.log(`this is da one with 2 ps: ${myDiv.children}`);

const myDiv1 = myDiv.querySelector('.myDiv1');
console.log(myDiv1);
console.log(myDiv1.children[1]);
myDiv1.children[1].classList.add('warning');
// remove the first paragraph
myDiv1.firstElementChild.remove();
// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height) {
  const html = `<div class="playerCard">
        <h2>${name} — ${age}</h2>
        <p>They are ${cmToFtIn(
          height
        )} tall and ${age} years old. In Dog years this person would be ${
    age * 7
  }. That would be a tall dog!</p>
  <button class="delete" type="button">&times; Delete</button>
        </div>
        
        `;
  return html;
}

function cmToFtIn(height) {
  const feet = Math.floor(height / 30.48);
  const inches = Math.round((height % 30.48) / 2.54);
  return `${feet}feet and ${inches}inches`;
}
// have that function return html that looks like this:
{
  /* <div class="playerCard">
  <h2>NAME — AGE</h2>
  <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
</div> */
}

// make a new div with a class of cards
const cards = document.createElement('div');
cards.classList.add('cards');

// make 4 player cards using generatePlayerCard
let cardsHTML = generatePlayerCard('kim', 29, 175);
cardsHTML = cardsHTML + generatePlayerCard('scott', 29, 175);
cardsHTML = cardsHTML + generatePlayerCard('luke', 29, 175);
cardsHTML = cardsHTML + generatePlayerCard('mary', 29, 175);
cards.innerHTML = cardsHTML;
// append those cards to the div
myDiv.insertAdjacentElement('beforebegin', cards);
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed
const buttons = document.querySelectorAll('.delete');
console.log(buttons);
// select all the buttons!
// make out delete function
function deleteCard(event) {
  const buttonThatGotClicked = event.currentTarget;
  //   buttonThatGotClicked.parentElement.remove();
  buttonThatGotClicked.closest('.playerCard').remove();
  console.log('delete card! todo!');
}
// loop over them and attach a listener
buttons.forEach(button => button.addEventListener('click', deleteCard));
