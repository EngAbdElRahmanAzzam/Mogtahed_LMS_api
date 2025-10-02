//core
import {Router} from "express"
import { RefactorServiceHandler } from "../services/refactorHandler"
import { bodyFilter } from "../middlewares/reqBodyFilter"

export const routerEductionalLevel = Router()

routerEductionalLevel.route("/")
 //   .get()
    .post(bodyFilter(new Set(["month", "less"])),
    RefactorServiceHandler.create())