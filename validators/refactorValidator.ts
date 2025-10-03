import { check, param } from "express-validator";
import { catchErrorValidator } from "../middlewares/validator";
import { PrismaClientConfig } from "../config/prisma.config";
import { PrismaClient } from "@prisma/client";

export class RefactorValidatorHandler{
    private static UUIDv7_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-7[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

    static helperUUIDV7 = (val:string) => {
        if(!RefactorValidatorHandler.UUIDv7_REGEX.test(val))
            throw new Error("Not Valid Id")
        return true
    }

    static getOne = [
        param('id').custom(this.helperUUIDV7),
        catchErrorValidator
    ] 

    static deleteOne = (model:keyof PrismaClient) => [
        param('id').custom(this.helperUUIDV7).custom( async (val)=>{
            const data = await (PrismaClientConfig.getInstance()[model] as any).findUnique({where:{id:+val}})
            if(!data)
                throw new Error(`Not Found element with id ${val}`)
            return true
        }),
        catchErrorValidator
    ] 
}
