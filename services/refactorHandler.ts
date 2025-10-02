//core
import {Request , Response, NextFunction} from "express"

//third-party
import expressAsyncHandler from "express-async-handler";
import { PrismaClient } from '@prisma/client';

//client imports
import { PrismaClientConfig } from "../config/prisma.config";


export class RefactorServiceHandler{
    static prisma = PrismaClientConfig.getInstance()
    
    static create(model:keyof PrismaClient){
        return expressAsyncHandler(

            async function (req:Request , res:Response){
                const data  = await (RefactorServiceHandler.prisma[model] as any).create({data:req.body})
                res.status(201).json({data})
            }

        )
    }

    static delete(model:keyof PrismaClient){
        return expressAsyncHandler(

            async function(req:Request, res:Response){
                const data = await (RefactorServiceHandler.prisma[model] as any).delete({where:{id:+req.params.id}})
                res.status(204).json({data})
            }
        )
    }
    
}