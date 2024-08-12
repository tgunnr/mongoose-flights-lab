import { Router } from 'express'
import * as flightsCtl from '../controllers/flights.js'

const router = Router()

// GET /flights/new
router.get('/new', flightsCtl.new)

export {
	router
}