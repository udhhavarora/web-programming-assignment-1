var attempt = 5;
function validate() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username == "udhhav" && password == "ud@328") {
    alert("Login successful.");
    window.location = "dashboard.html";
    return false;
  } else {
    attempt--;
    alert("You have " + attempt + " attempt(s) left.");
    if (attempt == 0) {
      document.getElementById("username").disabled = true;
      document.getElementById("password").disabled = true;
      document.getElementById("submit").disabled = true;
      return false;
    }
  }
}
