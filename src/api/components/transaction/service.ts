import { TransactionReq, Transaction } from "./model";
import { TransactionRepository } from "./repository";

export interface TransactionService {
    getAllTransactions(): Promise<Transaction[]>
    getTransactionById(tx_id: number): Promise<Transaction>
    createTx(txReq: TransactionReq): Promise<Transaction>
}

export class TransactionServiceImp implements TransactionService{

    private transactionRepository : TransactionRepository
    
    constructor(transactionRepository: TransactionRepository){
        this.transactionRepository = transactionRepository
    }

    public async getAllTransactions(): Promise<Transaction[]> {
        const transactions = await this.transactionRepository.getAllTransactions()
        return transactions
    }

    public async getTransactionById(tx_id: number): Promise<Transaction> {
        const transaction = await this.transactionRepository.getByIdTransaction(tx_id)
        return transaction
    }

    public async createTx(txReq: TransactionReq): Promise<Transaction> {
        const now: Date =  new Date
        txReq.created_at = now
        txReq.updated_at = now
        txReq.status = "exitoso"
        const txDb = await this.transactionRepository.createTx(txReq)
        return txDb
    }
}