//core
import {Router} from "express"
import { bodyFilter } from "../middlewares/reqBodyFilter"
import { serviceGroup } from "../services/group"
import { RefactorValidatorHandler } from "../validators/refactorValidator"

export const routerGroup = Router()
const commonAllowedKeys = ["name", "days", "time", "materialFees", "capacityMembers"]
const allowedKeysCreate = new Set(commonAllowedKeys.concat(['educationStageId']))
const allowedKeysUpdate = new Set(commonAllowedKeys)


routerGroup.route("/")
    .get(serviceGroup.getAll)
    .post(bodyFilter(allowedKeysCreate),serviceGroup.create)

routerGroup.route("/:id")
    .patch(bodyFilter(allowedKeysUpdate),serviceGroup.updateOne)
    .delete(RefactorValidatorHandler.deleteOne("group"),serviceGroup.deleteOne)                                                                                                                            
