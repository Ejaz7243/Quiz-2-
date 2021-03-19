$(function () {
  document.getElementById("form").addEventListener("click", checkErrors);
});

function checkErrors(event) {
  event.preventDefault();

  if (
    document.getElementById("name").textContent.length >= 5 &&
    document.getElementById("password").textContent.length >= 8 &&
    document.getElementById("password").textContent ===
      document.getElementById("confirm_password").textContent
  ) {
    handleFormSubmit();
  } else {
    if (document.getElementById("password").textContent.length < 8) {
      document.getElementById("div1").textContent +=
        "Password Must be eight characters long<br />";
      document.getElementById("password").style.border = "2px solid red";
      document.getElementById("confirm_password").style.border =
        "2px solid red";
    }
    if (
      document.getElementById("password").textContent.length !==
      document.getElementById("confirm_password").textContent.length
    ) {
      document.getElementById("div1").textContent +=
        "<p>Passwords not same<br /></p>";
      document.getElementById("password").style.border = "2px solid red";
      document.getElementById("confirm_password").style.border =
        "2px solid red";
    }
    if (document.getElementById("name").textContent.length < 5) {
      document.getElementById("div1").textContent +=
        "<p>Name should be atleast 5 characters<br /></p>";
      document.getElementById("name").style.border = "2px solid red";
    }
    if ($("#email").val().length < 10) {
      document.getElementById("div1").textContent +=
        "<p>Email must be atleast 10 characters<br /></p>";
      document.getElementById("email").style.display = "2px solid red";
    }

    event.preventDefault();
  }
}
function handleFormSubmit(e) {
  alert("Form is being submitted");
}
