# WeatherForcastAPI

# 🌤️ Weather Forecast API (Node + Express + TypeScript)

A lightweight HTTP server built with **Node.js**, **Express**, and **TypeScript** that fetches **forecasted weather** from the **National Weather Service (NWS)** API.

---

## 🚀 Features
- Accepts **latitude** and **longitude** as query params  
- Returns:
  - Short forecast for today (e.g., “Partly Cloudy”)
  - Temperature category → `hot`, `cold`, or `moderate`
- Uses **NWS Web Service API** as the data source
- Includes:
  - Global error handling
  - OpenAPI/Swagger documentation (`/docs`)
  - Jest + Supertest for testing

---

## 🧱 Project Structure
```
weather-express-ts/
├── src/
│   ├── app.ts
│   ├── server.ts
│   ├── routes/
│   │   └── index.ts
│   ├── services/
│   │   └── weatherService.ts
│   ├── middleware/
│   │   └── error.middleware.ts
│   ├── docs/
│   │   └── swagger.ts
│   └── tests/
│       └── forecast.e2e.test.ts
├── .env
├── tsconfig.json
├── jest.config.cjs
└── package.json
```

---

## ⚙️ Installation
```bash
# clone the repo
git clone https://github.com/<your-username>/weather-express-ts.git
cd weather-express-ts

# install dependencies
npm install



---

## 🧩 Environment Variables
Create a `.env` file in the project root:
```
PORT=3000
HOT_F=85
COLD_F=45
```

---

## 🏃‍♂️ Running Locally
```bash
# run in development (auto reload)
npm run dev


```
Your server should be live at:  
👉 **http://localhost:3000**

---

## 🌤️ Example Request
```bash
curl "http://localhost:3000/api/forecast?lat=40.7128&lon=-74.0060"
```

### Example Response
```json
{"location":{"city":"Hoboken","state":"NJ"},"coordinates":{"lat":40.7128,"lon":-74.006},"date":"2025-11-05T19:00:00-05:00","shortForecast":"Chance Rain Showers then Partly Cloudy","temperature":{"value":48,"unit":"F"},"category":"moderate"}
```

---

## 🧠 Temperature Categories
| Range (°F) | Category   |
|-------------|-------------|
| ≥ 85        | hot         |
| ≤ 45        | cold        |
| 46–84       | moderate    |

---

## 🧰 API Documentation
Swagger UI is available at:  
👉 **http://localhost:3000/docs**
<img width="1438" height="794" alt="Screenshot 2025-11-05 at 7 36 57 PM" src="https://github.com/user-attachments/assets/b4f04f5b-e53c-4148-9a26-ba68333c582e" />
---

## 🧪 Testing
```bash
npm run dev
npm test (in another terminal)
```
<img width="430" height="220" alt="Screenshot 2025-11-05 at 7 36 23 PM" src="https://github.com/user-attachments/assets/96e7a3e5-82d7-47a2-8614-0dbd663341c6" />



--


