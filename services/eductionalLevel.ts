import { RefactorServiceHandler } from "./refactorHandler"


class ServiceEducationalLevel extends RefactorServiceHandler{
    constructor(){
        super("educationalStage")
    }
}

export const serviceEducationalLevel = new ServiceEducationalLevel()