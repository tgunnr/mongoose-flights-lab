import { Flight } from "../models/flight"

function newFlight(req, res) {
  res.render("flights/new", {
    title: "Add Flight",
  })
}

export {
  newFlight as New,
}