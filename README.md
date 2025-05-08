
# Real-Time Crypto Price Tracker

This is a **Real-Time Crypto Price Tracker** app built with **React** and **Redux Toolkit**. It tracks the prices of various cryptocurrencies and simulates real-time updates using setInterval to mimic WebSocket updates.

## 📦 Tech Stack

- **Frontend**: 
  - React
  - Redux Toolkit
  - Recharts (for charts)
  - Tailwind CSS (for styling)
- **State Management**: Redux Toolkit (`createSlice`, `configureStore`)
- **Mocked Real-Time Data**: Simulated WebSocket behavior using `setInterval` for price updates every 1–2 seconds.

---

## 📂 Architecture

1. **App Component**: The main component that renders the UI and handles the lifecycle of real-time data updates using `setInterval`.
2. **Redux Store**: Manages the global state for the app (crypto assets) using **Redux Toolkit**.
3. **CryptoSlice**: Contains logic for updating the prices and related data of each cryptocurrency.
4. **CryptoTable**: Displays a responsive table of cryptocurrencies with live data, including their prices, changes, market cap, and 7-day chart.
5. **Sample Data**: Initially uses hardcoded sample data to simulate cryptocurrency asset info.

---

## 🛠️ Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/crypto-price-tracker.git
   ```

2. **Install dependencies:**

   Navigate to the project directory and run the following command:

   ```bash
   cd crypto-price-tracker
   npm install
   ```

3. **Run the app:**

   After the dependencies are installed, start the development server:

   ```bash
   npm start
   ```

   This will open the app in your browser at [http://localhost:3000](http://localhost:3000).

---

## 🎯 Features

- **Real-Time Updates**: Simulated WebSocket updates for crypto prices, 1h, 24h, 7d percentage changes, volume, and circulating supply.
- **Responsive Table**: The table is fully responsive, displaying essential data for each asset, and adjusts well to various screen sizes.
- **Color-Coded Percentage Changes**: Positive percentage changes (1h, 24h, 7d) are displayed in green, and negative changes in red.
- **7-Day Chart**: A static SVG image is used to represent the 7-day price movement.

---

## 🎥 Demo Video

Watch the demo video showcasing the functionality of the **Real-Time Crypto Price Tracker**:

[Watch Demo Video](https://drive.google.com/file/d/1c2v_2h64M-q-_IiOdBj84vZcvh0ELKS4/view?usp=sharing)

---

## 👨‍💻 Author

- **Shreyas Kallurkar**  
[LinkedIn](https://www.linkedin.com/in/shreyas-kallurkar/)  
Freelance Web Developer & Full-Stack Developer
