//core
import {Request , Response} from "express"

//third-party
import expressAsyncHandler from "express-async-handler";
import { PrismaClient } from '@prisma/client';

//client imports
import { PrismaClientConfig } from "../config/prisma.config";


export class RefactorServiceHandler{
    private model: keyof PrismaClient;
    private static prisma = PrismaClientConfig.getInstance()

    constructor(model:keyof PrismaClient){
        this.model = model;
    }

    create(){
        return expressAsyncHandler(

            async (req:Request , res:Response) => {
                const data  = await (RefactorServiceHandler.prisma[this.model] as any).create({data:req.body})
                res.status(201).json({data})
            }

        )
    }

    getOne(){

        return expressAsyncHandler(

            async (req:Request , res:Response) => {
                const id = +req.params.id
                const data = await (RefactorServiceHandler.prisma[this.model] as any).findUnique({where:{id}})
                if(data)
                {
                    res.status(200).json({data})
                    return
                }
                res.status(404).json({error:`Not Found Element with id ${id}`})
            }

        )

    }

    updateOne(){

        return expressAsyncHandler(

            async (req:Request , res:Response) => {
                const id = +req.params.id
                const data = await (RefactorServiceHandler.prisma[this.model] as any).update({where:{id} , data:req.body})
                res.status(200).json({data})
            }

        )

    }

    deleteAll(){
        return expressAsyncHandler(

            async (req:Request, res:Response) =>{
                const data = await (RefactorServiceHandler.prisma.educationalStage).deleteMany()
                res.status(204).json({msg:"ok"})
            }

        )
    }

    deleteOne(){
        return expressAsyncHandler(

            async (req:Request, res:Response) =>{
                const id = +req.params.id
                const data = await (RefactorServiceHandler.prisma[this.model] as any).delete({where:{id}})
                res.status(204).json({data})
            }

        )
    }
    
}