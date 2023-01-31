const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (!email || !password) {
    return alert('All forms must be filled in!');
  }

  const user = {
    email,
    password
  };

  console.log(user);
  form.reset();
}

