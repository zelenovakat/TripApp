import React from "react"
import { useParams } from "react-router-dom"
import { useTrips } from "../stores/TripStore"

const SingleTrip = () => {
  let { tripId } = useParams()
  const { getTripById } = useTrips()
  const trip = getTripById(tripId)
  return <div>{trip.title}</div>
}

export default SingleTrip
