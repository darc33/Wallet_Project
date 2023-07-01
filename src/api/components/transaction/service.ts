import { TransactionReq, Transaction } from "./model";

export interface TransactionService {
    getAllTransactions(): Transaction[]
    getTransactionById(tx_id: number): Transaction
}

export class TransactionServiceImp implements TransactionService{

    public getAllTransactions(): Transaction[] {
        try{
            const transactions: Transaction[] = [{
                transaction_id: 1,
                wallet_id: 1,
                type: "",
                payee: "",
                amount: 1,
                status: "string",
                
            }]
            return transactions
        } catch(error){
            throw new Error("fallo")
        }
    }
    public getTransactionById(tx_id: number): Transaction {
        try{
            const transactions: Transaction = {
                transaction_id: 1,
                wallet_id: 1,
                type: "",
                payee: "",
                amount: 1,
                status: "string",
                
            }
            return transactions
        } catch(error){
            throw new Error("fallo")
        }
    }
}