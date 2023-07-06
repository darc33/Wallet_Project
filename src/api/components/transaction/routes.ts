import { Router } from "express";
import { TransactionController, TransactionControllerImp } from "./controller";
import { TransactionServiceImp } from "./service";
import { TransactionRepository } from "./repository";
import { WalletServiceImp } from "../wallet/service";
import { WalletRepository } from "../wallet/repository";

const router = Router()
const transactionRepository=  new TransactionRepository()
const transactionService = new TransactionServiceImp(transactionRepository)
const walletRepository = new WalletRepository()
const walletService = new WalletServiceImp(walletRepository)
const transactionController: TransactionController = new TransactionControllerImp(transactionService, walletService)

transactionService.startListenNotify()
//Create Transaction
router.post('/create', transactionController.createTx.bind(transactionController) )

//Update Transaction
router.patch('/:tx_id/update', transactionController.updateTransaction.bind(transactionController) )

//list transactions
router.get('/list', transactionController.getAllTransactions.bind(transactionController))

//get transaction by id
router.get('/:tx_id', transactionController.getTransactionById.bind(transactionController))

export default router
