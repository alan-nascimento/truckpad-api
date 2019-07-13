import { Router } from 'express'

import TruckerController from './controllers/TruckerController'

const routes = Router()

routes.get('/truckers', TruckerController.index)
routes.post('/truckers', TruckerController.create)

export default routes
