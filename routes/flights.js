import { Router } from 'express'
import * as flightsCtrl from '../controllers/flights.js'

const router = Router()

// GET /flights
router.get('/', flightsCtrl.index)
// GET /movies/new
router,get('/new', flightsCtrl.new)

export { router }
