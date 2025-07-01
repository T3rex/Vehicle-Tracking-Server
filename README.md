# 🚗 Vehicle Tracker API (Backend)

This is the **backend** server for the Vehicle Tracker project. It provides real-time or simulated vehicle location data to the frontend via a simple REST API.

## Live API Endpoint

GET https://vehicle-tracking-server-3xn2.onrender.comapi/location

Returns the next `[latitude, longitude]` coordinate in a simulated route.

---

## Features

- ✅ REST API using **Express.js**
- 📍 Simulated GPS route from dummy data (`data.json`)
- 🔄 Sequential streaming of coordinates
- 🔚 Returns 204 No Content when data ends

---

## 🛠️ Tech Stack

- Node.js
- Express
- CORS (Cross-Origin Resource Sharing)

## 🔧 Installation

1. Clone the repo:

   ```bash
   git clone https://github.com/T3rex/Vehicle-Tracking-Server
   cd vehicle-tracker-backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file in the root directory and add:

   ```plaintext
   PORT=3000
   ```

4. Start the server:

   ```bash
   npm start
   ```

5. Access the API at:

   ```plaintext
   http://localhost:3000/api/location?index=0
   ```

## API Details

GET /api/location
Returns the next GPS coordinate from the route of the queried index.

Response (Success)

```json
[41.87662, -87.64765]
```

Response (End of data)

```plaintext
204 No Content
```

## Dummy Data Format (data.json)

```json
[
  [41.87662, -87.64765],
  [41.87663, -87.64766],
  [41.87664, -87.64767],
  ...
]
```

Feel free to edit or generate more.
