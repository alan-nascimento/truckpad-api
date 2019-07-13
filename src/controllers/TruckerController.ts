import { Request, Response } from 'express'

import Trucker from '../schemas/Trucker'

class TruckerController {
    public async index (req: Request, res: Response): Promise<Response> {
        const truckers = await Trucker.find()

        return res.json(truckers)
    }

    public async create (req: Request, res: Response): Promise<Response> {
        const trucker = await Trucker.create(req.body)

        return res.json(trucker)
    }
}

export default new TruckerController()
