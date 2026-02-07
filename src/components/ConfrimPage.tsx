"use client";

import { useState } from "react";
import { createBooking } from "@/lib/api";

export default function ConfirmPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [bookingId, setBookingId] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [passport, setPassport] = useState("");

  async function submit(e: any) {
    e.preventDefault();

    const { searchId } = JSON.parse(localStorage.getItem("selected")!);

    const res = await createBooking({
      searchId,
      traveller: { name, email, phone, dob, gender, passport },
    });

    setBookingId(res.bookingId);
    setShowPopup(true); // ✅ show popup
  }

  const input =
    "w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-red-400";

  return (
    <div className="max-w-5xl mx-auto p-4 space-y-6">

      <h2 className="text-xl font-semibold text-gray-800">
        Review Your Booking
      </h2>

      {/* FORM */}
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
            <input className={input} onChange={(e)=>setEmail(e.target.value)} />
          </div>

          <div>
            <label className="text-sm text-gray-600">Contact Number</label>
            <input className={input} onChange={(e)=>setPhone(e.target.value)} />
          </div>
        </div>

        <h3 className="font-semibold text-gray-700 border-b pb-2">
          Traveller Information
        </h3>

        <div className="grid md:grid-cols-2 gap-4">
          <input className={input} placeholder="Full Name" onChange={(e)=>setName(e.target.value)} />

          <select className={input} onChange={(e)=>setGender(e.target.value)}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <input type="date" className={input} onChange={(e)=>setDob(e.target.value)} />

          <input className={input} placeholder="Passport Number" onChange={(e)=>setPassport(e.target.value)} />
        </div>

        <button className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-md font-semibold shadow">
          Confirm
        </button>
      </form>

      {/* ✅ POPUP MODAL */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">

          <div className="bg-white rounded-lg shadow-lg p-6 w-80 text-center space-y-4">

            <h3 className="text-lg font-semibold text-green-600">
              Booking Confirmed 🎉
            </h3>

            <p className="text-sm text-gray-600">
              Your Booking ID:
            </p>

            <p className="font-bold text-gray-800">
              {bookingId}
            </p>

            <button
              onClick={() => setShowPopup(false)}
              className="bg-blue-600 text-white px-4 py-2 rounded-md"
            >
              Close
            </button>

          </div>
        </div>
      )}

    </div>
  );
}
