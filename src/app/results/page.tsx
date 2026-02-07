"use client"

import { useEffect, useState } from "react"
import FlightCard from "@/components/FlightCard"

export default function Results() {
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    const stored = localStorage.getItem("searchData")
    if (!stored) return

    try {
      const parsed = JSON.parse(stored)

      if (parsed?.flights && Array.isArray(parsed.flights)) {
        setData(parsed)
      } else {
        setData({ flights: [] })
      }
    } catch (e) {
      console.error(e)
    }
  }, [])

  if (!data) return <p className="p-6">Loading...</p>
  if (data.flights.length === 0)
    return <p className="p-6">No flights found</p>

  const airlineDetails = data?.metaData?.airlineDetails || {}

  return (
    <div className="p-6 space-y-4">
      {data.flights.map((f: any) => {
        const airlineCode = f.airlineCode || f.airline
        const airlineName =
          airlineDetails?.[airlineCode]?.name || airlineCode

        return (
          <FlightCard
            key={f.flightKey}
            flight={{
              ...f,
              airlineName
            }}
            searchId={data.searchId}
          />
        )
      })}
    </div>
  )
}
