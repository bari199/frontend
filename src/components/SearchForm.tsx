"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { searchFlights } from "@/lib/api";
import { motion } from "framer-motion";

export default function SearchForm() {
  const router = useRouter();
  const [msg, setMsg] = useState("");
  const [form, setForm] = useState({
    source: "",
    destination: "",
    departureDate: "",
    passengers: "",
    priceMax: "",
    stops: "",
    departureTimeRange: "",
  });

  async function submit(e: any) {
    e.preventDefault();
      if (
    !form.source ||
    !form.destination ||
    !form.departureDate ||
    !form.passengers ||
    !form.priceMax ||
    !form.stops ||
    !form.departureTimeRange
  ) {
    setMsg("Please all fields are required.");
    return; // stop submit
  }
    const data = await searchFlights(form);
    localStorage.setItem("searchData", JSON.stringify(data));
    router.push("/results");
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-6xl mx-auto"
    >
      <form
        onSubmit={submit}
        className="bg-gray-200 p-4 rounded-lg shadow flex flex-col md:flex-row gap-4 items-end"
      >
        {/* Source */}
        <div className="flex-1">
          <label className="text-sm font-medium text-gray-700">
            Departure City
          </label>

          <input
            className="w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={form.source}
            onChange={(e) => setForm({ ...form, source: e.target.value })}
          />
        </div>

        {/* Destination */}
        <div className="flex-1">
          <label className="text-sm font-medium text-gray-700">
            Destination City
          </label>

          <input
            className="w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={form.destination}
            onChange={(e) => setForm({ ...form, destination: e.target.value })}
          />
        </div>

        {/* Date */}
        <div className="flex-1">
          <label className="text-sm font-medium text-gray-700">
            Departure Date
          </label>

          <input
            type="date"
            className="w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={form.departureDate}
            onChange={(e) =>
              setForm({ ...form, departureDate: e.target.value })
            }
          />
        </div>

        {/* Passengers */}
        <div className="flex-1">
          <label className="text-sm font-medium text-gray-700">
            Travellers & Seat
          </label>

          <select
            className="w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={form.passengers}
            onChange={(e) => setForm({ ...form, passengers: e.target.value })}
          >
            <option value="">Select</option>

            <option value='{"ADT":"1","CHD":"0","INF":"0"}'>1 Adult</option>

            <option value='{"ADT":"2","CHD":"0","INF":"0"}'>2 Adults</option>

            <option value='{"ADT":"1","CHD":"1","INF":"0"}'>
              1 Adult + 1 Child
            </option>

            <option value='{"ADT":"2","CHD":"1","INF":"0"}'>
              2 Adults + 1 Child
            </option>

            <option value='{"ADT":"1","CHD":"0","INF":"1"}'>
              1 Adult + Infant
            </option>
          </select>
        </div>
        <div className="flex-1">
          <label className="text-sm font-medium text-gray-700">
            Price Range
          </label>

          <input
            type="number"
            className="w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={form.priceMax}
            onChange={(e) => setForm({ ...form, priceMax: e.target.value })}
          />
        </div>
        <div className="flex-1">
          <label className="text-sm font-medium text-gray-700">Stops</label>

          <input
            type="number"
            className="w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={form.stops}
            onChange={(e) => setForm({ ...form, stops: e.target.value })}
          />
        </div>
        <div className="flex-1">
          <label className="text-sm font-medium text-gray-700">TimeRange</label>

          <input
            type="text"
            className="w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={form.departureTimeRange}
            onChange={(e) =>
              setForm({ ...form, departureTimeRange: e.target.value })
            }
          />
        </div>

        {/* Button */}
        <div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium shadow"
          >
            Search Flights
          </button>
        </div>
      </form>
      {msg && <p className="text-red-600 mt-2">{msg}</p>}
    </motion.div>
  );
}
