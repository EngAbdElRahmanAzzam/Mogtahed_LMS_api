//core
import {Router} from "express"
import { RefactorServiceHandler } from "../services/refactorHandler"
import { bodyFilter } from "../middlewares/reqBodyFilter"

export const routerEductionalLevel = Router()

routerEductionalLevel.route("/")
 //   .get()
    .post(bodyFilter(new Set(["name", "monthFees", "bookingFees", "materialFees", "capacityMembers"])),
    RefactorServiceHandler.create("educationalStage"))

routerEductionalLevel.route("/:id")
    .delete(RefactorServiceHandler.delete('educationalStage'))