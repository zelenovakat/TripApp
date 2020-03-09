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
    to: "24.02.2021",
    from: "29.02.2021",
    numberOfPeople: 4,
    budget: 0,
  },
  {
    id: "2",
    cover: florenceImg,
    title: "Florence",
    description: "Some text",
    to: "01.03.2021",
    from: "01.03.2021",
    numberOfPeople: 2,
    budget: 0,
  },
  {
    id: "3",
    cover: turkey1Img,
    title: "Turkey",
    description: "Some text",
    to: "05.03.2021",
    from: "10.03.2021",
    numberOfPeople: 10,
    budget: 0,
  },
]

function useProvideTrips() {
  const [trips, setTrips] = useLocalStorage("trips", mockedTrips)

  // const getTripById = tripId => {
  //   const singleTrip = trips.find(item => Number(tripId) === item.id)
  //   return singleTrip || {}
  // }

  const getTripById = tripId => trips.find(item => tripId === item.id) || {}

  const removeTrip = tripId => {
    const tripsWithoutOne = trips.filter(trip => trip.id !== tripId)
    setTrips(tripsWithoutOne)
  }

  const createTrip = data => {
    const newTrips = [...trips, data]
    setTrips(newTrips)
  }

  // With help of setTrips we should add our new trip to the state
  // Google "ES6 add object to array of objects"

  return {
    trips,
    setTrips,
    getTripById,
    createTrip,
    removeTrip,
  }
}
