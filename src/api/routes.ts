import { Router } from "express";
import transactionsRoutes from './components/transaction/routes'
import walletRoutes from './components/wallet/routes'

const router = Router()

router.use('/transaction', transactionsRoutes)
router.use('/wallet', walletRoutes)

export default router