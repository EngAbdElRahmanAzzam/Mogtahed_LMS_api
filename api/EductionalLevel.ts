//core
import {Router} from "express"
import { bodyFilter } from "../middlewares/reqBodyFilter"
import { serviceEducationalLevel } from "../services/eductionalLevel"

export const routerEductionalLevel = Router()

routerEductionalLevel.route("/")
 //.get()
    .post(bodyFilter(new Set(["name", "monthFees", "bookingFees", "materialFees", "capacityMembers"])),serviceEducationalLevel.create())
    .delete(serviceEducationalLevel.deleteAll())


routerEductionalLevel.route("/:id")
    .get(serviceEducationalLevel.getOne())
    .patch(serviceEducationalLevel.updateOne())
    .delete(serviceEducationalLevel.deleteOne())