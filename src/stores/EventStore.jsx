import React, { useContext, createContext } from "react"
import useLocalStorage from "../components/UseLocalStorage"

const eventsContext = createContext()

export function ProvideEvents({ children }) {
  const provideEvents = useProvideEvents()
  return <eventsContext.Provider value={provideEvents}>{children}</eventsContext.Provider>
}
export const useEvents = () => {
  return useContext(eventsContext)
}

function useProvideEvents() {
  const [events, setEvents] = useLocalStorage("events", [])

  const getEventsByTripId = tripId => {
    const singlEvents = events.filter(item => tripId === item.tripId)
    return singlEvents
  }
  const removeEvent = eventId => {
    const eventsWithoutOne = events.filter(event => event.id !== eventId)
    setEvents(eventsWithoutOne)
  }

  const createEvents = data => {
    const newEvents = [...events, data]

    setEvents(newEvents)
  }
  return {
    events,
    setEvents,
    getEventsByTripId,
    createEvents,
    removeEvent,
  }
}
