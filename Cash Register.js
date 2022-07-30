/*
input: cash-in-drawer
output: total funds in drawer
*/
const countFunds = (cid) => {
    return cid.reduce((total, currentUnit) => {
      let sumOfTwo = total + currentUnit[1];
      return Number(sumOfTwo.toPrecision(3));
    }, 0
      );
  }
  
  
  /*
  input:
  price >>> purchase price
  cash >>> payment
  cid >>> cash-in-drawer
  
  output: Object
  {
  status: value(as string)
  change: value(as array)
  */
  function checkCashRegister(price, cash, cid) {
    
    let statusAndChange = {
      status: "INSUFFICIENT_FUNDS", 
      change: []
    };
    
    const change = cash - price;
    const totalFunds = countFunds(cid);
    
    if (change > totalFunds) {
      return statusAndChange;
    }
    
    if (change === totalFunds) {
      statusAndChange.status = "CLOSED"
      statusAndChange.change = cid;
      return statusAndChange;
    }
  }
  
  test1 = checkCashRegister(19.5, 20, 
  [
    ["PENNY", 1.01], 
    ["NICKEL", 2.05], 
    ["DIME", 3.1], 
    ["QUARTER", 4.25], 
    ["ONE", 90], 
    ["FIVE", 55], 
    ["TEN", 20], 
    ["TWENTY", 60], 
    ["ONE HUNDRED", 100]
    ]
    );