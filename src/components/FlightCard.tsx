"use client"

import { selectFlight } from "@/lib/api"
import { useRouter } from "next/navigation"

function formatTime(t: string) {
  const d = new Date(t)
  return d.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  })
}

function formatDate(t: string) {
  return new Date(t).toLocaleDateString([], {
    day: "2-digit",
    month: "short",
    year: "numeric"
  })
}

function calcDuration(dep: string, arr: string) {
  const mins =
    (new Date(arr).getTime() - new Date(dep).getTime()) / 60000

  const h = Math.floor(mins / 60)
  const m = Math.floor(mins % 60)

  return `${h}h ${m}m`
}

function calcStops(key: string) {
  if (!key) return 0
  return key.split("_").length - 1
}

export default function FlightCard({ flight, searchId }: any) {
  const router = useRouter()

  if (!flight) return null

  const duration = calcDuration(
    flight.departureTime,
    flight.arrivalTime
  )

  const stops = calcStops(flight.flightKey)

  async function select() {
    await selectFlight({
      searchId,
      flightKey: flight.flightKey,
      fareId: flight.fareId
    })

    localStorage.setItem("selected", JSON.stringify({ searchId }))
    router.push("/booking")
  }

  console.log("Rendering FlightCard with flight:", flight) // Debug log
 return (
  <div className="bg-white border rounded-lg shadow-sm p-4 flex flex-col md:flex-row items-center justify-between gap-4">

    {/* LEFT SECTION */}
    <div className="flex items-center gap-6 w-full">

      {/* Airline */}
      <div className="min-w-35">
        <p className="font-semibold text-sm">
          {flight.airline}
        </p>
        <p className="text-xs text-gray-500">
          {flight.flightNumber}
        </p>
      </div>

      {/* DEPART */}
      <div className="text-center">
        <p className="text-xs text-gray-500">Depart</p>

        <p className="font-semibold text-lg">
          {formatTime(flight.departureTime)}
        </p>

        <p className="text-xs text-gray-500">
          {formatDate(flight.departureTime)}
        </p>

        <p className="text-xs text-gray-600 mt-1">
          {flight.originName}
        </p>

        <p className="text-xs text-gray-500">
          ({flight.originCode})
        </p>
      </div>

      {/* MIDDLE FLIGHT LINE */}
      <div className="flex-1 flex flex-col items-center">
        <p className="text-xs text-gray-500 mb-1">
          {duration} • {stops === 0 ? "Non Stop" : `${stops} Stop`}
        </p>

        <div className="w-full flex items-center">
          <div className="flex-1 h-px bg-gray-300"></div>
          <div className="mx-2 text-gray-400 text-sm">✈</div>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>
      </div>

      {/* ARRIVE */}
      <div className="text-center">
        <p className="text-xs text-gray-500">Arrive</p>

        <p className="font-semibold text-lg">
          {formatTime(flight.arrivalTime)}
        </p>

        <p className="text-xs text-gray-500">
          {formatDate(flight.arrivalTime)}
        </p>

        <p className="text-xs text-gray-600 mt-1">
          {flight.destinationName}
        </p>

        <p className="text-xs text-gray-500">
          ({flight.destinationCode})
        </p>
      </div>
    </div>

    {/* RIGHT SECTION */}
    <div className="flex flex-col items-end gap-2 min-w-35">

      <p className="text-xs text-gray-500">Price</p>

      <p className="text-xl font-bold text-gray-800">
        ₹{(flight.totalPrice ?? flight.pricePerPassenger)?.toFixed(2)}
      </p>

      <button
        onClick={select}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium"
      >
        Book Now
      </button>

      <button className="text-xs text-orange-500 font-medium">
        Details ▾
      </button>
    </div>

  </div>
)
}