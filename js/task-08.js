const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("All fields should be completed");
  }
  const formData = {
    [email.name]: email.value,
    [password.name]: password.value,
  };

  console.log(formData);

  event.target.reset();
}
