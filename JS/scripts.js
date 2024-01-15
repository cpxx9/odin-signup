//phone input add hyphens only allow digits
var phoneNumber = document.querySelector('#phone_number');

phoneNumber.addEventListener('keyup', function(e){
  if (e.key != 'Backspace' && phoneNumber.value.length === 3) {
    phoneNumber.value = '(' + phoneNumber.value + ')';
  } else if (e.key != 'Backspace' && phoneNumber.value.length === 8) {
    phoneNumber.value += '-';
  }
});

//verify password and confirm password match
//let the user know before they submit
document.getElementById('password_confirm').addEventListener("keyup", validatePassword);

function validatePassword() {
  let password = document.getElementById('password').value;
  let confirmPassword = document.getElementById('password_confirm').value;

  if (password != confirmPassword) {
    document.getElementById('wrong_pass_alert').style.color = 'red';
    document.getElementById('wrong_pass_alert').innerHTML = '☒ Use same password';
    document.getElementById('create').disabled = true;
    document.getElementById('create').style.opacity = (0.8);
  } else {
    document.getElementById('wrong_pass_alert').style.color = 'green';
    document.getElementById('wrong_pass_alert').innerHTML = '🗹 Passwors match';
    document.getElementById('create').disabled = false;
    document.getElementById('create').style.opacity = (1);
}
}

function wrong_pass_alert() {
  if (document.getElementById('password').value != "" &&
      document.getElementById('password_confirm').value != "") {
      alert("Your response is submitted");
  } else {
      alert("Please fill all the fields");
  }
}