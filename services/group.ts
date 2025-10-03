//core
//client
import { RefactorServiceHandler } from "./refactorHandler"


class ServiceGroup extends RefactorServiceHandler{
    constructor(){
        super("group")
    }
}

export const serviceGroup = new ServiceGroup()