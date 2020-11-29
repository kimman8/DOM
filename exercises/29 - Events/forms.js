const wes = document.querySelector('.wes');

wes.addEventListener('click', function (event) {
  const shouldChangePage = confirm(
    'This websiute migt be mailicious!do u wish to proceed?'
  );
  if (!shouldChangePage) {
    event.preventDefault();
  }
});

const signupForm = document.querySelector('[name="signup"]');
signupForm.addEventListener('submit', function (event) {
  const name = event.currentTarget.name.value;
  if (name.includes('chad')) {
    alert('sorry bro');
    event.preventDefault();
  }
});

function logEvent(event) {
  console.log(event.type);
  console.log(event.currentTarget.value);
}

signupForm.name.addEventListener('keyup', logEvent);
signupForm.name.addEventListener('keydown', logEvent);
signupForm.name.addEventListener('focus', logEvent);
signupForm.name.addEventListener('blur', logEvent);
