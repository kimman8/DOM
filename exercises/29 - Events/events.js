const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');
function handleClick() {
  console.log('IT GOT CLICKED!');
}
const hooray = () => console.log('hooray');

butts.addEventListener('click', hooray);
coolButton.addEventListener('click', handleClick);

function buyItem() {
  console.log('buying item!');
}

//listen on multiple items
const buyButtons = document.querySelectorAll('button.buy');

function handleBuyButtonClick(event) {
  const button = event.target;
  //   console.log(button.textContent);
  //   console.log('you are buying it!');
  //   console.log(parseFloat(event.target.dataset.price));
  console.log('you clicked a button!');
  console.log(event.target);
  console.log(event.currentTarget);
  console.log(event.target === event.currentTarget);
  //   event.stopPropagation();
}

buyButtons.forEach(function (buyButton) {
  buyButton.addEventListener('click', handleBuyButtonClick);
});

window.addEventListener(
  'click',
  function (event) {
    console.log('u clicked da window');
    console.log(event.target);
    console.log(event.type);
    console.log(event.bubbles);
    event.stopPropagation();
  },
  { capture: true }
);

const photoElement = document.querySelector('.photo');
photoElement.addEventListener('mouseenter', function (e) {
  console.log(e.currentTarget);
  console.log(this);
});
