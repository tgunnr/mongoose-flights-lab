import { Router } from 'express'
import * as flightsCtl from '../controllers/flights.js'

const router = Router()

// GET /flights/new
router.get('/new', flightsCtl.new)
// POST /flights
router.post('/', flightsCtl.create)
// GET /:flightNo
router.get('/:flightNo', flightsCtl.show)
// DELETE /flights/:flightNo
router.delete("/:flightNo", flightsCtl.delete)
// EDIT /:flightNo/edit
router.get("/:flightNo/edit", flightsCtl.edit)

export {
	router
}