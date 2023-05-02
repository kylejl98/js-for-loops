
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {

  var wrongBalanceAccounts = []

  for (let i = 0; i < array.length; i++) {
    var balance = array[i].balance;
    var deposits = array[i].deposits;
    var withdrawals = array[i].withdrawals;
    var checkBalance = 0

    if(deposits != undefined){
      for (let j = 0; j < deposits.length; j++) {
        checkBalance += deposits[j];
      }
    }

    if(withdrawals != undefined){
      for (let j = 0; j < withdrawals.length; j++) {
        checkBalance -= withdrawals[j];
      }
    }

    if(checkBalance != balance) {
      wrongBalanceAccounts.push(array[i]);
    }
  }
  return wrongBalanceAccounts;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
