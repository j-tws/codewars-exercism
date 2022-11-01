import './style.css'
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


console.log('exercise loaded')

// Create class Bank as parent class 
class Bank {
  constructor(customerName, balance) {
    this._customerName = customerName,
    this._balance = balance,
    this._accountNum = `BANKACCNO-${Math.floor(Math.random() * 10000)}`
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


}

// class BankAccount as child class of Bank class
class BankAccount extends Bank {
  constructor(customerName, balance) {
    super(customerName, balance);
  }

  withdraw(amount){
    
    if (this._balance < amount){
      return `You are withdrawing $${amount} from your account with $${this._balance}. You got no money`
    }

    this._balance -= amount
    return `You withdrew $${amount}, your new balance is now $${this._balance}`

  }

  deposit(amount){
    this._balance += amount
    return `You deposited $${amount}, your new balance is now $${this._balance}`
  
  }

  changeName(newName){
    this._customerName = newName
  }

}

const testAcc = new BankAccount('John', 5000)

console.log(testAcc.customerName)
console.log(testAcc.balance)

testAcc.deposit(500)
console.log(testAcc.withdraw(2000))
console.log(testAcc.withdraw(5000))
// testAcc.withdraw(1000)
// testAcc.withdraw(10000)
// console.log(testAcc.balance)


