//diposite Amount manage
document.getElementById("diposite-btn").addEventListener("click", function () {
  // get the ammount diposited
  const dipositeInput = document.getElementById("diposite-input");
  const dipositeAmount = dipositeInput.value;
  //    console.log(dipositeAmount);

  //   set new diposite input
  const currentDiposite = document.getElementById("diposite-total");
  currentDiposite.innerText =
    parseFloat(currentDiposite.innerText) + parseFloat(dipositeAmount);

  //   get previous balance
  const currentBalance = document.getElementById("balance-total");

  //   set total balance
  currentBalance.innerText =
    parseFloat(currentBalance.innerText) + parseFloat(dipositeAmount);

  //   clear input
  dipositeInput.value = "";
});

//Withdraw Amount manage
document.getElementById("withdraw-btn").addEventListener("click", function () {
    // get the withdraw ammount 
    const withdrawInput = document.getElementById("withdraw-input");
    const withdrawAmount = withdrawInput.value;
    //    console.log(withdrawAmount);
  
    //   set new withdraw input
    const currentWithdraw = document.getElementById("withdraw-total");
    currentWithdraw.innerText =
      parseFloat(currentWithdraw.innerText) + parseFloat(withdrawAmount);
  
    //   set total balance
    const currentBalance = document.getElementById("balance-total");
  
    currentBalance.innerText =
      parseFloat(currentBalance.innerText) - parseFloat(withdrawAmount);
  
    //   clear input
    withdrawInput.value = "";
  });
