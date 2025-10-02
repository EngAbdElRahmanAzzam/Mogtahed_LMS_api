//core
import {Request , Response, NextFunction} from "express"

//third-party
import expressAsyncHandler from "express-async-handler";
import { PrismaClient } from '@prisma/client';

//client imports
import { PrismaClientConfig } from "../config/prisma.config";


export class RefactorServiceHandler{
    private static prisma = PrismaClientConfig.getInstance()

    static create(model:keyof PrismaClient){
        return expressAsyncHandler(

            async function (req:Request , res:Response){
                const data  = await (RefactorServiceHandler.prisma[model] as any).create({data:req.body})
                res.status(201).json({data})
            }

        )
    }

    static getOne(model:keyof PrismaClient){

        return expressAsyncHandler(

            async function (req:Request , res:Response){
                const id = +req.params.id
                const data = await (RefactorServiceHandler.prisma[model] as any).findUnique({where:{id}})
                if(data)
                {
                    res.status(200).json({data})
                    return
                }
                res.status(404).json({error:`Not Found Element with id ${id}`})
            }

        )

    }

    static updateOne(model:keyof PrismaClient){

        return expressAsyncHandler(

            async function (req:Request , res:Response){
                const id = +req.params.id
                const data = await (RefactorServiceHandler.prisma[model] as any).update({where:{id} , data:req.body})
                res.status(200).json({data})
            }

        )

    }

    static deleteAll(model:keyof PrismaClient){
        return expressAsyncHandler(

            async function(req:Request, res:Response){
                const data = await (RefactorServiceHandler.prisma.educationalStage).deleteMany()
                res.status(204).json({msg:"ok"})
            }

        )
    }

    static deleteOne(model:keyof PrismaClient){
        return expressAsyncHandler(

            async function(req:Request, res:Response){
                const id = +req.params.id
                const data = await (RefactorServiceHandler.prisma[model] as any).delete({where:{id}})
                res.status(204).json({data})
            }

        )
    }
    
}