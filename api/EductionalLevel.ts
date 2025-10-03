//core
import {Router} from "express"
import { bodyFilter } from "../middlewares/reqBodyFilter"
import { serviceEducationalLevel } from "../services/eductionalLevel"

export const routerEductionalLevel = Router()

const allowedKeys = new Set(["name", "monthFees", "bookingFees", "materialFees", "capacityMembers"])

routerEductionalLevel.route("/")
    .get(serviceEducationalLevel.getAll)
    .post(bodyFilter(allowedKeys),serviceEducationalLevel.create)
    .patch(serviceEducationalLevel.reset())
    .delete(serviceEducationalLevel.deleteAll)


routerEductionalLevel.route("/:id")
    .get(serviceEducationalLevel.getOne)
    .patch(bodyFilter(allowedKeys),serviceEducationalLevel.updateOne)
    .delete(serviceEducationalLevel.deleteOne)                                                                                                                            