# ✈️ Flight Booking App

## Overview

This Flight Booking App is a web application built with **Next.js**,
**React**, and **Tailwind CSS** that allows users to search, view, and
book flights.\
It integrates backend APIs for flight search, selection, and booking
creation, and stores intermediate data in local storage to manage
navigation between pages.

The goal of this project is to demonstrate a full booking flow --- from
searching flights to confirming a reservation --- with a clean UI and
simple state management.

------------------------------------------------------------------------

## 🚀 Features

### 🔍 Flight Search

-   Enter source and destination cities
-   Select departure date
-   Choose travellers (Adult / Child / Infant)
-   Filter by:
    -   Price range
    -   Stops
    -   Departure time range
-   Stores search results locally for navigation

### 📋 Results Display

-   Shows list of available flights
-   Displays:
    -   Airline & flight number
    -   Departure & arrival time
    -   Duration & stops
    -   Origin & destination airports
    -   Total price
-   Allows selecting a flight

### 🧍 Traveller Booking Form

-   Collects traveller details:
    -   Name
    -   Email
    -   Phone
    -   Gender
    -   Date of birth
    -   Passport number
-   Sends data to backend booking API

### ✅ Confirmation Popup

-   Displays confirmation message
-   Shows Booking ID
-   Tailwind modal popup UI

------------------------------------------------------------------------

## 🛠 Tech Stack

### Frontend

-   Next.js (App Router)
-   React
-   Tailwind CSS v4
-   Framer Motion (animations)

### Backend Communication

-   Custom API functions:
    -   `searchFlights()`
    -   `selectFlight()`
    -   `createBooking()`

### Storage

-   Browser LocalStorage for:
    -   Search results
    -   Selected flight reference

------------------------------------------------------------------------

## 📁 Project Structure (Simplified)

    app/
     ├─ page.tsx              # Search page
     ├─ results/              # Flight results UI
     ├─ booking/              # Traveller form
     ├─ confirmPage/          # Confirmation popup page

    components/
     ├─ SearchForm.tsx
     ├─ FlightCard.tsx
     ├─ TravellerForm.tsx

    lib/
     ├─ api.ts                # API calls

------------------------------------------------------------------------

## 🔄 User Flow

1️⃣ User searches flights\
2️⃣ Results page lists available flights\
3️⃣ User selects flight\
4️⃣ Traveller fills booking form\
5️⃣ Booking API called\
6️⃣ Confirmation popup displayed

------------------------------------------------------------------------

## 🧪 Future Improvements

-   Authentication
-   Multi-passenger support
-   Seat selection
-   Payment gateway integration
-   Server-side validation
-   Real-time flight updates

------------------------------------------------------------------------

## 📌 Notes

This project is intended for learning/demo purposes and focuses
primarily on UI flow and API integration rather than production-grade
booking infrastructure.

------------------------------------------------------------------------

## 👨‍💻 Author
@sk md abdul bari
Flight Booking App --- Built for practice and demonstration of modern
full-stack web development using Next.js ecosystem.
