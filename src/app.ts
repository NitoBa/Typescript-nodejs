import express from "express";
import mongoose from "mongoose";
import routes from "./routes";
import 'dotenv/config'

class App {

    public express: express.Application

    public constructor() {
        this.express = express()
        this.middlewares()
        this.database(<string>process.env.MONGO_URL)
        this.routes()
    }

    private middlewares(): void {
        this.express.use(express.json())
    }

    private database(MONGO_URL: string): void {
        mongoose.connect(MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    }

    private routes(): void {
        this.express.use(routes)
    }
}

export default new App().express