function validateForm(event) {
  event.preventDefault();

  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  if (name === "" || email === "" || message === "") {
    alert("Por favor, preencha todos os campos.");
    return false;
  }

  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(email)) {
    alert("Por favor, insira um email válido.");
    return false;
  }

  document.getElementById('form').reset();
  document.getElementById('success-message').style.display = "block";

  setTimeout(function() {
    document.getElementById('success-message').style.display = "none";
  }, 5000);

  return false;
}

document.getElementById('form').addEventListener('submit', validateForm);