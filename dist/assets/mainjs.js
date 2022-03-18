function showOrHide(event, action) {
  switch (action) {
    case "show":
      document.getElementById(event).style.display = "block";
      break;
    case "hide":
      document.getElementById(event).style.display = "none";
      break;
  }
}

function openAddOverlay() {
  document.getElementById("add-overlay").style.display = "block";
  // document.getElementById("table-overlay").style.display = "none";

}
function closeAddOverlay() {
  document.getElementById("add-overlay").style.display = "none";
  // document.getElementById("table-overlay").style.display = "block";

}
function openSearchOverlay() {
  document.getElementById("search-overlay").style.display = "block";
  // document.getElementById("table-overlay").style.display = "none";

}
function closeSearchOverlay() {
  document.getElementById("search-overlay").style.display = "none";
  // document.getElementById("table-overlay").style.display = "block";

}