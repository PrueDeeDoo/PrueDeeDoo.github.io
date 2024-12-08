const checkbox1 = document.getElementById("c1");
const checkbox2 = document.getElementById("c2");
const checkbox3 = document.getElementById("c3");
const makeListButton = document.getElementById("makeList");
const result = document.getElementById("resultDisplay");
const makeSLB = document.getElementById("makeSharedList");
const sharedIDIn = document.getElementById("sharedIDInput");
const outputID = document.getElementById("outputSharedID");
const sharedIDDisplay = document.getElementById("sharedIDText");
const copySharedIDButton = document.getElementById("copySharedID");



makeListButton.addEventListener("click", function() {
  let selectedItems = [];
  let sharedID = [];

  if (checkbox1.checked) {
    sharedID.push("1")
    selectedItems.push(c1.nextElementSibling.textContent);
  } else {
    sharedID.push("0")
  }

  
  if (checkbox2.checked) {
    sharedID.push("1")
    selectedItems.push(c2.nextElementSibling.textContent);
  } else {
    sharedID.push("0")
  }

  
  if (checkbox3.checked) {
    sharedID.push("1")
    selectedItems.push(c3.nextElementSibling.textContent);
  } else {
    sharedID.push("0")
  }


  
  let displayText = "";

  if (selectedItems.length > 0) {
    displayText = "Selected Items:" + "<br>" + selectedItems.join("<br>");
  } else {
    displayText = "No items selected";
  }

  result.innerHTML = displayText;
  sharedIDDisplay.innerHTML = "Below is your shareable ID:";
  outputID.innerHTML = sharedID.join("");
  copySharedIDButton.style.display = "block";
});

sharedIDIn.addEventListener("input", function() {
  this.value = this.value.replace(/[^0-1]/g, "");
});

makeSLB.addEventListener("click", function() {
  let sharedID = "";
  const digits = sharedIDIn.value;
  const listOut = digits.split("").map(Number);
  //result.innerHTML = String(listOut);
  let checkboxMulti = 0;
  for (let i = 0; i < listOut.length; i++) {
    checkboxMulti += 1;
    const checkboxId = "c" + (checkboxMulti);
    console.log(checkboxId);
    const currentCheckbox = document.getElementById(checkboxId);
    if (listOut[i] === 0) {
      currentCheckbox.checked = false;
    } else if (listOut[i] === 1) {
        currentCheckbox.checked = true;
    }
  };
  makeListButton.click();
});



copySharedIDButton.addEventListener("click", function() {
  const textToCopy = outputID.textContent;
  navigator.clipboard.writeText(textToCopy)
    .then(() => {
      alert("Shared ID copied to clipboard!");
    })
    .catch(err => {
      console.error("Failed to copy: ", err);
    });
});