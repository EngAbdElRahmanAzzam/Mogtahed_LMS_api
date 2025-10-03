import {body} from "express-validator"
import { catchErrorValidator } from "../middlewares/validator"
import { CustomValidation, ErrorMsg } from "./config.validator"
import { PrismaClientConfig } from "../config/prisma.config"

const entity = "Eduactional Stage"

export const bodyEducationalStageValidator = [
    body('name')
        .notEmpty()
        .withMessage(ErrorMsg.required(entity,"Name"))
        .isLength(CustomValidation.textLength)
        .custom(async (val)=>{
            const data = await PrismaClientConfig.getInstance().educationalStage.findUnique({where:{name:val}})
            if(!data)
                throw new Error(`Not Found element with id ${val}`)
            return true
        }),

    body('capacityMembers')
        .isInt(CustomValidation.intNumberRange)
        .withMessage(ErrorMsg.required(entity,"capacityMembers"))
        .optional(),

    body('bookingFees')
        .isInt(CustomValidation.intNumberRange)
        .withMessage(ErrorMsg.required(entity,"monthFees")),

    body('monthFees')
        .isInt(CustomValidation.intNumberRange)
        .withMessage(ErrorMsg.required(entity,"monthFees")),

    body('materialFees')
        .isInt(CustomValidation.intNumberRange)
        .withMessage(ErrorMsg.required(entity,"materialFees")),
]

export const validatorCreateEducationalStage = [
    ...bodyEducationalStageValidator,
    catchErrorValidator
]

export const validatorUpdateEducationalStage = [
    ...bodyEducationalStageValidator.map((rule) => rule.optional()),
    catchErrorValidator
]
