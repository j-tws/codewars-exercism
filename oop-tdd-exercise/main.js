
// import javascriptLogo from './javascript.svg'
// import { setupCounter } from './counter.js'

// # Bank account 
// Skills tested - Object oriented programming & test driven development

// - Create a Bank & BankAccount class.
// - A Bank will have multiple Bank accounts.
// - A bank account will have the following fields:
//     - Account Number
//     - Balance
//     - Customer Name
// - You must be able to retrieve the value of all fields (OOP - Getter), but only `Balance` and `Customer Name` values can be updated (OOP - Setter).
// - Create methods allow deposit/withdrawal of funds. Ensure withdrawals will fail if insufficient funds. 
//     - You should respond with an object indicating transaction success / failure, and the new balance
// - Create method that allows changing the account's name
// - Write tests to confirm that invalid inputs are blocked, and any refactoring does not break existing functionalities
//     - Block negative value deposits
//     - Block withdrawals over limits
//     - Account Number must be unique



/* 
  Problems:
- Bank can only hold 1 account. What about another customer?
- The bank object shouldn't be storing the customer name & balance. That's for the bankAccount
- Returns are inconsistently returning an error / a string
  - throw is not ideal
  - OOP task should return objects. Task says - You should respond with an object indicating transaction success / failure

- Tests
  - All sad path, no happy path
  - Insufficient coverage for the question.
  - check name, balance?
*/


console.log('exercise loaded')


// Create class Bank as parent class 
class Bank {
  constructor() {
    this.accountNum = 0
    this._accounts = {}
  }

  get accounts(){
    return this._accounts
  }
  
  newAcc(customerName){
    let accountNum = `BANKACC-${this.accountNum++}`
    this.accounts[accountNum] = new BankAccount(customerName, accountNum)
    return this.accounts[accountNum]
  }

  deleteAcc(accountNum){
    delete this._accounts[accountNum]
  }

}

// class BankAccount as child class of Bank class
class BankAccount {
  constructor(customerName, accountNum) {
    this._customerName = customerName
    this._balance = 0
    this._accountNum = accountNum
    this._overdraft = 0
  }

  get customerName(){
    return this._customerName
  }

  get balance(){
    return this._balance
  }

  get accountNum(){
    return this._accountNum
  }

  get overdraft(){
    return this._overdraft
  }

  setOverdraft(amount){
    this._overdraft = amount
  }

  setName(name){

    if (name.length == 0){
      throw "Name cannot be empty"
    } else if ( /\d/.test(name) ){
      throw "Name cannot contain numbers"
    }

    this._customerName = name
  }

  withdraw(amount){
    let response = {
      success: false
    }

    if (amount < 0){
      response.errorMessage =  "Negative values can't be used"
    } else if (amount > this._balance - this._overdraft){
      response.errorMessage = "You passed your overdraft limit"
    }

    if (response.errorMessage){
      return response
    }
    
    this._balance -= amount
    response.success = true
    response.successMessage = `You withdrew $${amount}, your new balance is now $${this._balance}`
    return response

  }

  deposit(amount){
    
    this._balance += amount
    return `You deposited $${amount}, your new balance is now $${this._balance}`
  
  }

}

const bank = new Bank()
const accountOne = bank.newAcc('Justin')
const accountPip = bank.newAcc('Pip')
accountOne.setOverdraft(-200)
accountPip.setOverdraft(-500)
// console.log(accountOne.overdraft);
console.log(accountOne.withdraw(50))

bank.deleteAcc(accountOne.accountNum)
console.log(bank.accounts)
console.log(accountOne)

module.exports = BankAccount


