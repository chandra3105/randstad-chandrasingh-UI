function tabButClick(whoClick) {
  if (whoClick == "getStartes") {
    document.getElementById("getStartes").checked = true;
    document.getElementById("getStartes").disabled = true;
    document.getElementById("activeIcon").classList.add("mystyle");}
  if (whoClick == "property") {
    document.getElementById("property").checked = true;
    document.getElementById("property").disabled = true;
    document.getElementById("propertyActiveIcon").classList.add("mystyle");}
  if (whoClick == "income") {
    document.getElementById("income").checked = true;
    document.getElementById("income").disabled = true;
    document.getElementById("incomeActiveIcon").classList.add("mystyle");}
  if (whoClick == "assets") {
    document.getElementById("assets").checked = true;
    document.getElementById("assets").disabled = true;
    document.getElementById("assetsActiveIcon").classList.add("mystyle");}
  if (whoClick == "realEstate") {
    document.getElementById("realEstate").checked = true;
    document.getElementById("realEstate").disabled = true;
    document.getElementById("realEstateActiveIcon").classList.add("mystyle");}
  if (whoClick == "declaration") {
    document.getElementById("declaration").checked = true;
    document.getElementById("declaration").disabled = true;
    document.getElementById("declarationActiveIcon").classList.add("mystyle");}
  if (whoClick == "EConsent") {
    document.getElementById("EConsent").checked = true;
    document.getElementById("EConsent").disabled = true;
    document.getElementById("EConsentActiveIcon").classList.add("mystyle");}
  var checkboxes = document.querySelectorAll('input[type=checkbox]:checked').length;
  document.getElementById("child").style.transition = "all 0.6s";
  if (checkboxes == 1) {
    document.getElementById("child").style.width = "15%";
    document.getElementById("tooltipValue").innerHTML = "15 %";}
  if (checkboxes == 2) {
    document.getElementById("child").style.width = "30%";
    document.getElementById("tooltipValue").innerHTML = "30 %";}
  if (checkboxes == 3) {
    document.getElementById("child").style.width = "45%";
    document.getElementById("tooltipValue").innerHTML = "45 %";}
  if (checkboxes == 4) {
    document.getElementById("child").style.width = "60%";
    document.getElementById("tooltipValue").innerHTML = "60 %";}
  if (checkboxes == 5) {
    document.getElementById("child").style.width = "75%";
    document.getElementById("tooltipValue").innerHTML = "75 %";}
  if (checkboxes == 6) {
    document.getElementById("child").style.width = "90%";
    document.getElementById("tooltipValue").innerHTML = "90 %";}
  if (checkboxes == 7) {
    document.getElementById("child").style.width = "100%";
    document.getElementById("tooltipValue").innerHTML = "100 %";
    document.getElementById('submit').disabled = false;}
}
