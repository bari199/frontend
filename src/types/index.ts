export interface Flight {
  flightKey: string
  fareId: string
  airline: string
  flightNumber: string
  departureTime: string
  arrivalTime: string
  pricePerPassenger: number
  totalPrice: number
}

export interface SearchResponse {
  searchId: string
  flights: Flight[]
}
