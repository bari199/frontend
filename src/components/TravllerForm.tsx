"use client";
import { useState } from "react";
import { createBooking } from "@/lib/api";

export default function TravellerForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [passport, setPassport] = useState("");
  const [msg, setMsg] = useState("");

  async function submit(e: any) {
    e.preventDefault();

    const { searchId } = JSON.parse(localStorage.getItem("selected")!);

    const res = await createBooking({
      searchId,
      traveller: { name, email, phone, dob, gender, passport },
    });

    setMsg("Booking Confirmed ID: " + res.bookingId);
  }

  const input =
    "w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-red-400";

  return (
    <div className="max-w-5xl mx-auto p-4 space-y-6">

      {/* HEADER */}
      <h2 className="text-xl font-semibold text-gray-800">
        Review Your Booking
      </h2>

      {/* CONTACT DETAILS */}
      <form
        onSubmit={submit}
        className="bg-white border rounded-md shadow-sm p-5 space-y-6"
      >
        <h3 className="font-semibold text-gray-700 border-b pb-2">
          Contact Details
        </h3>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-600">Email</label>
            <input
              className={input}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Contact Number</label>
            <input
              className={input}
              placeholder="Phone"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>

        {/* TRAVELLER INFO */}
        <h3 className="font-semibold text-gray-700 border-b pb-2">
          Traveller Information
        </h3>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-600">Full Name</label>
            <input
              className={input}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Gender</label>
            <select
              className={input}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="text-sm text-gray-600">Date of Birth</label>
            <input
              type="date"
              className={input}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Passport Number</label>
            <input
              className={input}
              placeholder="Passport"
              onChange={(e) => setPassport(e.target.value)}
            />
          </div>
        </div>

        {/* CONFIRM BUTTON */}
        <button
          className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-md font-semibold shadow"
        >
          Confirm
        </button>

        {msg && (
          <p className="text-green-600 font-medium text-center">
            {msg}
          </p>
        )}
      </form>
    </div>
  );
}
