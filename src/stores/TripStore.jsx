import React, { useState, useContext, createContext } from "react"
import phuketImg from "../images/trips/phuket.jpeg"
import florenceImg from "../images/trips/florence.jpeg"
import turkey1Img from "../images/trips/turkey1.jpeg"

const tripsContext = createContext()
export function ProvideTrips({ children }) {
  const trips = useProvideTrips()
  return <tripsContext.Provider value={trips}>{children}</tripsContext.Provider>
}
export const useTrips = () => {
  return useContext(tripsContext)
}

const mockedTrips = [
  {
    id: 1,
    cover: phuketImg,
    title: "Phuket",
    description: "Some text",
    from: "2020.03.20",
    to: "2020.04.10",
    numberOfPeople: 4,
    budget: 0,
  },
  {
    id: 2,
    cover: florenceImg,
    title: "Florence",
    description: "Some text",
    from: "2020.04.05",
    to: "2020.04.10",
    numberOfPeople: 2,
    budget: 0,
  },
  {
    id: 3,
    cover: turkey1Img,
    title: "Turkey",
    description: "Some text",
    from: "2020.03.20",
    to: "2020.06.12",
    numberOfPeople: 10,
    budget: 0,
  },
]

function useProvideTrips() {
  const [trips, setTrips] = useState(mockedTrips)

  // const getTripById = tripId => {
  //   const singleTrip = trips.find(item => Number(tripId) === item.id)
  //   return singleTrip || {}
  // }

  const getTripById = tripId => trips.find(item => Number(tripId) === item.id) || {}

  return {
    trips,
    setTrips,
    getTripById,
  }
}
