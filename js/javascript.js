function tabButClick(whoClick) {
  if (whoClick == "abcd") {
    document.getElementById("myCheck").checked = true;
    document.getElementById("myCheck").disabled = true;
  }
  if (whoClick == "xyz") {
    document.getElementById("myCheck1").checked = true;
    document.getElementById("myCheck1").disabled = true;
  }
  if (whoClick == "three") {
    document.getElementById("myCheck3").checked = true;
    document.getElementById("myCheck3").disabled = true;
  }
  if (whoClick == "four") {
    document.getElementById("myCheck4").checked = true;
    document.getElementById("myCheck4").disabled = true;
  }
  if (whoClick == "five") {
    document.getElementById("myCheck5").checked = true;
    document.getElementById("myCheck5").disabled = true;
  }
  if (whoClick == "six") {
    document.getElementById("myCheck6").checked = true;
    document.getElementById("myCheck6").disabled = true;
  }
  if (whoClick == "seven") {
    document.getElementById("myCheck7").checked = true;
    document.getElementById("myCheck7").disabled = true;
  }
  var checkboxes = document.querySelectorAll('input[type=checkbox]:checked').length;
  document.getElementById("child").style.transition = "all 0.6s";
  if (checkboxes == 1) { document.getElementById("child").style.width = "15%"; }
  if (checkboxes == 2) { document.getElementById("child").style.width = "30%"; }
  if (checkboxes == 3) { document.getElementById("child").style.width = "45%"; }
  if (checkboxes == 4) { document.getElementById("child").style.width = "60%"; }
  if (checkboxes == 5) { document.getElementById("child").style.width = "75%"; }
  if (checkboxes == 6) { document.getElementById("child").style.width = "90%"; }
  if (checkboxes == 7) { document.getElementById("child").style.width = "100%"; }
}
