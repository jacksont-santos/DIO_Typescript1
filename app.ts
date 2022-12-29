import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { PartnersAccount } from './class/PartnersAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log("\n ----- People account")
peopleAccount.deposit(50)
peopleAccount.withdraw(20)
peopleAccount.getName()
peopleAccount.getStatus()
peopleAccount.getBalance()
peopleAccount.getAccountNumber()
// peopleAccount.getAccount() // para obter a conta de uma vez com uma função apenas
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log("\n ----- Company account")
companyAccount.deposit(200)
companyAccount.withdraw(20)
companyAccount.getName()
companyAccount.getStatus()
companyAccount.getBalance()
companyAccount.getAccountNumber()
// peopleAccount.getAccount() // para obter a conta de uma vez com uma função apenas
const partnerAccount: PartnersAccount = new PartnersAccount('Enterprise', 1)
console.log("\n ----- Partner account")
partnerAccount.partnerDeposit(100)
partnerAccount.withdraw(20)
partnerAccount.getName()
partnerAccount.getStatus()
partnerAccount.getBalance()
partnerAccount.getAccountNumber()
// peopleAccount.getAccount() // para obter a conta de uma vez com uma função apenas