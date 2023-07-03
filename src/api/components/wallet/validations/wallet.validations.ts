import Joi from "joi";
import { WalletDBRes } from "../model";

const rechargeWalletSchema = Joi.object({
    amount: Joi.number().required(),
})

function rechargeValidation(reqBody: Object, type: string, WalletDBRes?: WalletDBRes){
    const {error,value} = rechargeWalletSchema.validate(reqBody)
    if (error){
        return error
    }
    
    if (WalletDBRes){
        if(WalletDBRes.status!="Active"){
            return {
                details:[
                    {message: "wallet is not active",}]
            }
        }
        if(WalletDBRes.amount + value.amount > 5000000 && type == "Recharge"){
            
            return {
                details:[
                    {message: "Amount to recharge wallet is too high",}]
            }
        }
    }else{
        return {
            details:[
                {message: "wallet does not exist",}]
        }
    }
}

export { rechargeWalletSchema, rechargeValidation }