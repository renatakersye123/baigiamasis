
function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    var x = document.forms["myForm"]["lname"].value;
    var x = document.forms["myForm"]["phnr"].value;
    if (x == "" || x == null) {
      alert("All fields must be filled out");
      return false;
    }
  }
