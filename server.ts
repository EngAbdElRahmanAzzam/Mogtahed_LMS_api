import server, { NextFunction, Request, Response, json } from "express"
import morgan from "morgan"
import { APP_PORT } from "./config"


const app = server()

// middlewares
app.use(morgan("dev"))
app.use(json())


app.use((error:any , req: Request, res: Response, next: NextFunction)=>{
    res.status(500).json({error})
    console.log(error)
})

app.listen(APP_PORT, ()=> {
    console.log(`Server is running on port ${APP_PORT}`)
})


