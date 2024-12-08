const checkbox1 = document.getElementById("c1");
const checkbox2 = document.getElementById("c2");
const checkbox3 = document.getElementById("c3");
const button = document.getElementById("makeList");
const result = document.getElementById("resultDisplay");

button.addEventListener("click", function() {
  let selectedItems = [];

  if (checkbox1.checked) {
    selectedItems.push("Object Name1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Price&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SKU&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Link");
  }
  if (checkbox2.checked) {
    selectedItems.push("Object Name2");
  }
  if (checkbox3.checked) {
    selectedItems.push("Object Name3");
  }

  let displayText = "";

  if (selectedItems.length > 0) {
    displayText = "Selected Items:" + "<br>" + selectedItems.join("<br>");
  } else {
    displayText = "No items selected";
  }

  result.innerHTML = displayText;
});