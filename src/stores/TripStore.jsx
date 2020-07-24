import React, { useContext, createContext } from "react"
import phuketImg from "../images/trips/phuket.jpeg"
import florenceImg from "../images/trips/florence.jpeg"
import turkey1Img from "../images/trips/turkey1.jpeg"
import useLocalStorage from "../components/UseLocalStorage"

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
    id: "1",
    cover: phuketImg,
    title: "Phuket",
    description: "Some text",
    from: "2021.02.24",
    to: "2021.02.29",
    numberOfPeople: 4,
    budget: 0,
  },
  {
    id: "2",
    cover: florenceImg,
    title: "Florence",
    description: "Some text",
    from: "2021.03.01",
    to: "2021.03.04",
    numberOfPeople: 2,
    budget: 0,
  },
  {
    id: "3",
    cover: turkey1Img,
    title: "Turkey",
    description: "Some text",
    from: "2021.03.05",
    to: "2021.03.11",
    numberOfPeople: 10,
    budget: 0,
  },
]

function useProvideTrips() {
  const [trips, setTrips] = useLocalStorage("trips", mockedTrips)

  const getTripById = tripId => trips.find(item => tripId === item.id) || {}

  const removeTrip = tripId => {
    const tripsWithoutOne = trips.filter(trip => trip.id !== tripId)
    setTrips(tripsWithoutOne)
  }

  const createTrip = data => {
    const newTrips = [...trips, data]
    setTrips(newTrips)
  }

  return {
    trips,
    setTrips,
    getTripById,
    createTrip,
    removeTrip,
  }
}
