//core
import {Request , Response} from "express"

//third-party
import expressAsyncHandler from "express-async-handler"

//client
import { RefactorServiceHandler } from "./refactorHandler"


class ServiceEducationalLevel extends RefactorServiceHandler{
    constructor(){
        super("educationalStage")
    }

    reset(){
        return expressAsyncHandler(
            async (req:Request , res:Response)=> {
                const resetData = {
                    "monthFees": 0,
                    "bookingFees" :0,
                    "materialFees": 0,
                    "capacityMembers": 0
                }
                
                await RefactorServiceHandler.prisma.educationalStage.updateMany({data:resetData})
                res.status(204).json({msg:"ok"})
            }
        )
    }
}

export const serviceEducationalLevel = new ServiceEducationalLevel()