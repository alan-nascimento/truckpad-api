import { Response } from 'express-serve-static-core'

import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

class App {
    public express: express.Application;

    public constructor () {
        this.express = express()

        this.middlewares()
        this.database()
        this.routes()
    }

    private middlewares (): void {
        this.express.use(express.json())
        this.express.use(cors())
    }

    private database (): void {
        mongoose.connect('mongodb://localhost:27017/truckpad', {
            useNewUrlParser: true
        })
    }

    private routes (): void {
        this.express.get('/', (req, res): Response => {
            return res.send('Truckpad!')
        })
    }
}

export default new App().express
