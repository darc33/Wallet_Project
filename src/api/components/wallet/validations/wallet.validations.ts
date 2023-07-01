import Joi from "joi";

const rechargeWalletSchema = Joi.object({
    amount: Joi.number().required(),
})

export { rechargeWalletSchema }