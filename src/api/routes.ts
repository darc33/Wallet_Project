import { Router } from "express";
import transactionsRoutes from './components/transaction/routes'

const router = Router()

router.use('/transaction', transactionsRoutes)

export default router