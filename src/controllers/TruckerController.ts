import { Request, Response } from 'express'

import Trucker from '../schemas/Trucker'

class TruckerController {
    public async index (req: Request, res: Response): Promise<Response> {
        const truckers = await Trucker.find()
        return res.json(truckers)
    }

    public async show (req: Request, res: Response): Promise<Response> {
        const trucker = await Trucker.findById(req.params.id)
        return res.json(trucker)
    }

    public async create (req: Request, res: Response): Promise<Response> {
        const trucker = await Trucker.create(req.body)
        return res.json(trucker)
    }

    public async update (req: Request, res: Response): Promise<Response> {
        const trucker = await Trucker.findByIdAndUpdate(req.params.id, req.body, { new: true })
        return res.json(trucker)
    }

    public async delete (req: Request, res: Response): Promise<Response> {
        await Trucker.findByIdAndRemove(req.params.id)
        return res.send()
    }
}

export default new TruckerController()
