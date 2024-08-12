import { Flight } from "../models/flight.js"

function newFlight(req, res) {
  res.render("flights/new", {
    title: "Add Flight",
  })
}

async function create(req, res) {
  try {
    const flight = await Flight.create(req.body)
    res.redirect('flights/')
  } catch (error) {
    console.log(error)
    res.redirect(`/flights`)
  }
  
}

async function show(req, res) {
  try {
    const flight = await Flight.findById(req.params.flightNo)
    res.render('flights/show', {
      flight,
      title: 'Flight Detail'
    })
  } catch (error) {
    console.log(error)
    res.redirect('/flights')
  }
}

async function deleteFlight(req, res) {
  try {
    await Flight.findByIdAndDelete(req.params.flightNo)
    res.redirect('/flights')
  } catch (error) {
    console.log(error)
    res.redirect('/flights')
  }
}

async function edit(req, res) {
  try {
    const flight = await Flight.findById(req.params.flightNo)
    res.render('flights/edit', {
      movie,
      title: 'Edit Flight'
    })
  } catch (error) {
    console.log(error)
    res.redirect('/flights')
  }
}

export {
  newFlight as new,
  create,
  show,
  deleteFlight as delete,
  edit
}