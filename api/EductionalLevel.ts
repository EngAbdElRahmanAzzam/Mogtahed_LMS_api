//core
import {Router} from "express"
import { bodyFilter } from "../middlewares/reqBodyFilter"
import { serviceEducationalLevel } from "../services/eductionalLevel"
import { RefactorValidatorHandler } from "../validators/refactorValidator"

export const routerEductionalLevel = Router()

const allowedKeys = new Set(["name", "monthFees", "bookingFees", "materialFees", "capacityMembers"])

routerEductionalLevel.route("/")
    .get(serviceEducationalLevel.getAll)
    .post(bodyFilter(allowedKeys),serviceEducationalLevel.create)
    .patch(serviceEducationalLevel.reset())
    .delete(serviceEducationalLevel.deleteAll)


routerEductionalLevel.route("/:id")
    .get(RefactorValidatorHandler.getOne,serviceEducationalLevel.getOne)
    .patch(bodyFilter(allowedKeys),serviceEducationalLevel.updateOne)
    .delete(RefactorValidatorHandler.deleteOne("educationalStage"),serviceEducationalLevel.deleteOne)                                                                                                                            