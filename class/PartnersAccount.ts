import { DioAccount } from "./DioAccount"

export class PartnersAccount extends DioAccount {

    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    partnerDeposit = (value: number): void => {
        let addedValue: number = value + 10
        this.deposit(addedValue)
    }
}