//core
import {Request , Response} from "express"

//third-party
import expressAsyncHandler from "express-async-handler";
import { PrismaClient } from '@prisma/client';

//client imports
import { PrismaClientConfig } from "../config/prisma.config";


export class RefactorServiceHandler{
    model: keyof PrismaClient;
    static prisma = PrismaClientConfig.getInstance()

    constructor(model:keyof PrismaClient){
        this.model = model;
    }

    create = expressAsyncHandler(

                async (req:Request , res:Response) => {
                    const data  = await (RefactorServiceHandler.prisma[this.model] as any).create({data:req.body})
                    res.status(201).json({data})
                }

            )

    getAll = expressAsyncHandler(

                async (req:Request , res:Response) => {
                    const page = req.query.p ?? 1
                    const take = req.query.l ?? 10
                    const skip = +take * (+page-1)

                    const data = await (RefactorServiceHandler.prisma.educationalStage).findMany({skip, take:+take})
                    if(data)
                    {
                        res.status(200).json({length:data.length, data})
                        return
                    }
                    res.status(404).json({error:`Not Found Elements`})
                }

            )   

    getOne = expressAsyncHandler(

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


    updateOne = expressAsyncHandler(

                async (req:Request , res:Response) => {
                    const id = +req.params.id
                    const data = await (RefactorServiceHandler.prisma[this.model] as any).update({where:{id} , data:req.body})
                    res.status(200).json({data})
                }

            )

    deleteAll = expressAsyncHandler(

                async (req:Request, res:Response) =>{
                    const data = await (RefactorServiceHandler.prisma.educationalStage).deleteMany()
                    res.status(204).json({msg:"ok"})
                }

            )

    deleteOne = expressAsyncHandler(

                async (req:Request, res:Response) =>{
                    const id = +req.params.id
                    const data = await (RefactorServiceHandler.prisma[this.model] as any).delete({where:{id}})
                    res.status(204).json({data})
                }
                
            )
    
}