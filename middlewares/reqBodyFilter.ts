//core
import {Request , Response, NextFunction} from "express"

//third-party
import expressAsyncHandler from "express-async-handler";

export function bodyFilter(keysList:Set<string>){

    return expressAsyncHandler(

        (req:Request, res:Response, next:NextFunction) => {
            let filteredBody :Record<string, string> = {}

            if(!req.body || Object.keys(req.body).length === 0){
                console.log("error")
                return next(new Error("Error"))
            }

            Object.keys(req.body).forEach( (key) => {
                if(keysList.has(key))
                    filteredBody[key] = req.body[key]
            })

            req.body = filteredBody
            next()            
        }
        
    )

} 