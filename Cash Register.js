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
  
  const provideChangeInUnits = (change, cid) => {
    
    const Nominals = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
    let changeInUnits = [];
    
    for (let index = Nominals.length - 1; index >= 0; index--) {
      
      let currNom = Nominals[index];
      
      if (change >= currNom) {
        let valueToProvide = currNom * Math.floor(change / currNom);
        changeInUnits.unshift(
              [cid[index][0], valueToProvide]
              );
        change = (change - valueToProvide).toPrecision(3);
      }
      
      if (change == 0) {break;}
      
    }
    
    return [changeInUnits, change];
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
    
    const changeInUnits = provideChangeInUnits(change, cid);
    
    if (changeInUnits[1] !== '0.00') {
      return statusAndChange;
    }
    
    statusAndChange.status = "OPEN";
    statusAndChange.change = changeInUnits[0]
    return statusAndChange;
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
  
  test2 = checkCashRegister(19.5, 20, 
  [
    ["PENNY", 0.5], ["NICKEL", 0], 
    ["DIME", 0], ["QUARTER", 0],
    ["ONE", 0], ["FIVE", 0], ["TEN", 0], 
    ["TWENTY", 0], ["ONE HUNDRED", 0]])
  
  console.log(test1);