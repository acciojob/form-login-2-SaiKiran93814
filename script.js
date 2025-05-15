//your JS code here. If required.
  
  
document.getElementById("Login").addEventListener("submit", function(event) {
  event.preventDefault();

  const firstName = document.getElementsByName("First Name")[0].value;
  const lastName = document.getElementsByName("Last Name")[0].value;
  const phoneNumber = document.getElementsByName("Phone Number")[0].value;
  const emailId = document.getElementsByName("Email ID")[0].value;

  const message = `First Name: ${firstName} Last Name: ${lastName} Phone Number: ${phoneNumber} Email ID: ${emailId}`;
  alert(message);
});
