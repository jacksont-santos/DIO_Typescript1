export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  // setName = (name: string): void => {
  //   this.name = name
  //   console.log('Nome alterado com sucesso!')
  // }

  public readonly getName = (): string => {
    console.log(`name: ${this.name}`)
    return this.name
  }

  public readonly getBalance = (): number => {
    console.log(`balance: ${this.balance}`)
    return this.balance
  }

  public readonly getAccountNumber = (): number => {
    console.log(`account number: ${this.accountNumber}`)
    return this.accountNumber
  }

  public readonly getStatus = (): boolean => {
    console.log(`status: ${this.status}`)
    return this.status
  }

  public readonly deposit = (value: number): void => {
    if(this.validateStatus()){
      this.balance = this.balance + value
      console.log('Voce depositou')
    }
  }

  public readonly withdraw = (value: number): void => {
    if(this.validateStatus() && this.balance > value) {
      this.balance = this.balance - value
      console.log('Voce sacou')
    }
  }

  public readonly validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }

  // public readonly getAccount = (): DioAccount => {
  //   return this
  // }
}
