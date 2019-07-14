import { Router } from 'express'

import TruckerController from './controllers/TruckerController'

const routes = Router()

routes.get('/truckers', TruckerController.index)
routes.get('/truckers/:id', TruckerController.show)
routes.post('/truckers', TruckerController.create)
routes.put('/truckers/:id', TruckerController.update)
routes.delete('/truckers/:id', TruckerController.delete)

export default routes
