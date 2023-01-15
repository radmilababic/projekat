import * as express from "express";
import { AppDataSource } from "./data-source";
AppDataSource.initialize().then(async () => {

    const app = express()
    app.use(express.json())


    app.listen(8080, () => {
        console.log('server started')
    })

}).catch(error => console.log(error))
