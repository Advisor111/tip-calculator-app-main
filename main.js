//
peo.onkeyup = function() {
  "use strict"
  if (peo.value == 0) {
    peo.value = "";
    peo.style.outline = "none";
    peo.style.border = "2px solid #de6666";
    error.innerHTML = "Can't be zero";
  } else {
    peo.style.border = "2px solid hsl(172, 67%, 45%)";
    peo.style.outline = "unset";
    error.innerHTML = "";
    reset.classList.add("reset");
    if (pCostom.type == "text") {
      if (pCostom.value == "") {
        pCostom.classList = "";
        pCostoml.style.display = "flex";
        tipNum.innerHTML = `$${parseFloat((bill.value * pCostom.value / 100 / peo.value).toFixed(2))}`;
        totalNum.innerHTML = `$${parseFloat((bill.value * pCostom.value / 100 / peo.value).toFixed(2)) + parseFloat((bill.value / peo.value).toFixed(2))}`;
      } else {
        tipNum.innerHTML = `$${parseFloat((bill.value * pCostom.value / 100 / peo.value).toFixed(2))}`;
        totalNum.innerHTML = `$${parseFloat((bill.value * pCostom.value / 100 / peo.value).toFixed(2)) + parseFloat((bill.value / peo.value).toFixed(2))}`;
      }
    } else {
      tipNum.innerHTML = `$${parseFloat((bill.value * 0 / 100 / peo.value).toFixed(2))}`;
      totalNum.innerHTML = `$${parseFloat((bill.value * 0 / 100 / peo.value).toFixed(2)) + parseFloat((bill.value / peo.value).toFixed(2))}`;
    } 
    //
    if (totalNum.innerHTML == "$NaN") {
      tipNum.innerHTML = `NaN`;
      totalNum.innerHTML = `NaN`;
    } else {};
    //
    const radioButtons = document.querySelectorAll('input[name="per"]');
    let selected;
    for (const radioButton of radioButtons) {
      if (radioButton.checked) {
        selected = radioButton.value;
        break;
      }
    }
    tipNum.innerHTML = `$${parseFloat((bill.value * parseFloat(selected) / 100 / peo.value).toFixed(2))}`;
    totalNum.innerHTML = `$${parseFloat((bill.value * parseFloat(selected) / 100 / peo.value).toFixed(2)) + parseFloat((bill.value / peo.value).toFixed(2))}`;
  }
};
//
pCostom.onclick = function() {
  "use strict"
  pCostom.type = "text";
  pCostom.classList = "pCostomI";
  pCostom.value = "";
  pCostoml.style.display = "none";
}
//
reset.onclick = function() {
  location.reload();
}