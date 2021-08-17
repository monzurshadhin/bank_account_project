function getInputValue(inputID) {
  // get the ammount diposited
  const inputField = document.getElementById(inputID);
  const amountValue = parseFloat(inputField.value);
  //   clear input
  inputField.value = "";

  return amountValue;
}

function updateTotalField(totalFieldId, inputAmount) {
  //   get previous balance
  const currentTotal = document.getElementById(totalFieldId);
  const currentTotalAmount = parseFloat(currentTotal.innerText);
  const newTotal = currentTotalAmount + inputAmount;
  currentTotal.innerText = newTotal;
}

function getCurrentBalance() {
  const currentBalance = document.getElementById("balance-total");
  const currentBalanceAmount = parseFloat(currentBalance.innerText);
  return currentBalanceAmount;
}

function updateBalance(inputAmount, isTrue) {
  //   get previous balance
  const currentBalance = document.getElementById("balance-total");
  const currentBalanceAmount = getCurrentBalance();

  //   set total balance
  if (isTrue == true) {
    currentBalance.innerText = currentBalanceAmount + inputAmount;
  } else {
    currentBalance.innerText = currentBalanceAmount - inputAmount;
  }
}

document.getElementById("diposite-btn").addEventListener("click", function () {
  // get input value
  const dipositeInputAmount = getInputValue("diposite-input");
  //   update ammount
  if (dipositeInputAmount > 0) {
    updateTotalField("diposite-total", dipositeInputAmount);
    updateBalance(dipositeInputAmount, true);
  }
});

document.getElementById("withdraw-btn").addEventListener("click", function () {
  // get input value
  const wthdrawInputAmount = getInputValue("withdraw-input");
  //   update ammount
  const currentBalanceAmount = getCurrentBalance();
  if (wthdrawInputAmount > 0 && wthdrawInputAmount<=currentBalanceAmount) {
    updateTotalField("withdraw-total", wthdrawInputAmount);
    updateBalance(wthdrawInputAmount, false);
  }
});
