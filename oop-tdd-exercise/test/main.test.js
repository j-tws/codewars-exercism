const BankAccount = require("../main");

describe('BankAccount', () => {

  it('you need to set name before accessing bank account methods', () => {
    const account = new BankAccount()
    expect(() => account.deposit(500)).toThrow("Please set name before accessing account methods")
  })

  it('name cannot be empty', () => {
    const account = new BankAccount()
    expect(() => account.setName('')).toThrow("Name cannot be empty")
  })

  it('name cannot contain numbers', () => {
    const account = new BankAccount()
    expect(() => account.setName('123John')).toThrow("Name cannot contain numbers")
  })

  it('negative value deposits are not allowed', () => {
    const account = new BankAccount()
    account.setName('John')
    expect(() => account.withdraw(-100)).toThrow("Negative values can't be used")
  })

  it('withdraw overlimits are not allowed', () => {
    const account = new BankAccount()
    account.setName('John')
    account.deposit(100)
    expect(() => account.withdraw(300)).toThrow("You are withdrawing $300 from your account with $100. You got no money")
  })

})