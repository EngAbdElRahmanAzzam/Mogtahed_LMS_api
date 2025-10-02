//core
import {Request , Response, NextFunction} from "express"

//third-party
import expressAsyncHandler from "express-async-handler";
import { PrismaClient } from '@prisma/client';
import { Prisma } from '@prisma/client';

import { PrismaClientConfig } from "../config/prisma.config";


export class RefactorServiceHandler{

    static create(model:keyof PrismaClient){
        return expressAsyncHandler(

            async function (req:Request , res:Response){
                const prisma = PrismaClientConfig.getInstance()
                const data  = await (prisma[model] as any).create({data:req.body})
                res.status(201).json({data})
            }
        )
        
    }
    
}