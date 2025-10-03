//core
import {Router} from "express"
import { bodyFilter } from "../middlewares/reqBodyFilter"
import { serviceEducationalLevel } from "../services/eductionalLevel"
import { RefactorValidatorHandler } from "../validators/refactorValidator"
import { validatorCreateEducationalStage, validatorUpdateEducationalStage } from "../validators/eductionalLevel"

export const routerEductionalLevel = Router()

const allowedKeys = new Set(["name", "monthFees", "bookingFees", "materialFees", "capacityMembers"])

routerEductionalLevel.route("/")
    .get(serviceEducationalLevel.getAll)
    .post(bodyFilter(allowedKeys),validatorCreateEducationalStage,serviceEducationalLevel.create)
    .patch(serviceEducationalLevel.reset())
    .delete(serviceEducationalLevel.deleteAll)


routerEductionalLevel.route("/:id")
    .get(RefactorValidatorHandler.getOne,serviceEducationalLevel.getOne)
    .patch(bodyFilter(allowedKeys),validatorUpdateEducationalStage,serviceEducationalLevel.updateOne)
    .delete(RefactorValidatorHandler.deleteOne("educationalStage"),serviceEducationalLevel.deleteOne)                                                                                                                            