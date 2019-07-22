import * as dotenv from 'dotenv'

import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import routes from './routes'

dotenv.config()

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
        this.express.use(cors({
            origin: ['https://truckpad-app.herokuapp.com/', 'http://localhost:3000']
        }))
    }

    private database (): void {
        mongoose.connect(
            process.env.MONGO_URL,
            { useNewUrlParser: true }
        )
    }

    private routes (): void {
        this.express.use(routes)
    }
}

export default new App().express
