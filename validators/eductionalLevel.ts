import {body} from "express-validator"
import { catchErrorValidator } from "../middlewares/validator"
import { CustomValidation, ErrorMsg } from "./config.validator"

const entity = "Eduactional Stage"

export const bodyEducationalStageValidator = [
    body('name')
        .notEmpty().withMessage('Brand required')
        .isLength(CustomValidation.textLength),

    body('capacityMembers')
        .isInt(CustomValidation.intNumberRange).withMessage(ErrorMsg.required(entity,"capacityMembers")).optional(),

    body('bookingFees')
        .isInt(CustomValidation.intNumberRange).withMessage(ErrorMsg.required(entity,"monthFees")),

    body('monthFees')
        .isInt(CustomValidation.intNumberRange).withMessage(ErrorMsg.required(entity,"monthFees")),

    body('materialFees')
        .isInt(CustomValidation.intNumberRange).withMessage(ErrorMsg.required(entity,"materialFees")),
]

export const validatorCreateEducationalStage = [
    ...bodyEducationalStageValidator,
    catchErrorValidator
]

export const validatorUpdateEducationalStage = [
    ...bodyEducationalStageValidator.map((rule) => rule.optional()),
    catchErrorValidator
]
