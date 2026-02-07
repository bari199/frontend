export async function searchFlights(payload:any) {
  const res = await fetch("/api/flights/search", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await res.json();
  console.log("SEARCH RESPONSE:", data);
  return data;
}

export async function selectFlight(payload:any) {
  const res = await fetch("/api/flight/select", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await res.json();
  console.log("SELECT RESPONSE:", data);
  return data;
}

export async function createBooking(payload:any) {
  const res = await fetch("/api/booking", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await res.json();
  console.log("BOOKING RESPONSE:", data);
  return data;
}
