# 🔗 TRAC SWAP

![INTERCOM Preview](assets/swaptest1.png)

![INTERCOM Preview](assets/swaptest2.png)

![INTERCOM Preview](assets/swaptest3.png)


**MY TRAC ADDRESS WALLET :**  
`trac19pc3kuakls46emtnu8amc4hazh826wav3zya9ffjeyvqg3jmdt9ql89dcy`

---

A Uniswap-inspired decentralized swap interface built for the **TRAC Chain ecosystem**.

TRAC SWAP is an open-source MVP prototype demonstrating a TRAC → USDT swap flow with a full-stack architecture (frontend + backend simulation).

---

## ✨ Overview

TRAC SWAP is a minimum viable product (MVP) decentralized exchange interface designed to simulate token swaps within the TRAC Chain network.

It features a modern DeFi UI, slippage configuration, live swap estimation, and backend transaction simulation.

This project serves as a foundational UI/UX and architectural reference for future TRAC ecosystem DeFi infrastructure.

---

## 🚀 Features

### 🎨 Frontend
- Uniswap-style swap interface
- TRAC Chain branding & logo
- Dark glassmorphism UI
- Responsive swap card layout
- Token input preview
- Live swap estimation

### 🔁 Swap Logic
- TRAC → USDT swap pair
- Real-time output preview
- Configurable slippage
- Minimum received calculation

### 🧠 Backend API
- Express.js swap server
- `/swap` POST endpoint
- Rate conversion engine
- Slippage handling
- Transaction simulation

### ⛓️ Transaction Simulation
- Escrow stage simulation
- Transfer processing state
- Success confirmation
- Generated transaction hash

---

## 🧱 Architecture

```
Frontend UI
   ↓
Swap Controller
   ↓
Express API Server
   ↓
Swap Calculation Engine
   ↓
Transaction Response
```

---

## 📂 Project Structure

```
trac-swap/

server.cjs        → Backend server
package.json

public/
   index.html     → Swap UI
   logo.png       → TRAC logo
```

---

## ⚙️ Configuration

Current demo rate:

```
1 TRAC = 0.206 USDT
```

Editable in:

```
server.cjs
const RATE = 0.206;
```

---

## ▶️ Run Locally

### Install dependencies

```bash
npm install express cors
```

### Start server

```bash
node server.cjs
```

### Open app

```
http://localhost:3000
```

---

## 🧪 Demo Flow

1. Enter TRAC amount  
2. Adjust slippage  
3. View estimated USDT output  
4. Click Swap  
5. Backend processes request  
6. Transaction hash returned  

---

## 🔮 Future Updates

Planned upgrades for **TRAC SWAP**:

### 💰 Pricing
- Real-time TRAC price API
- USD valuation display
- Price impact estimation

### 👛 Wallet Integration
- TRAC wallet connect
- Address detection
- Balance display

### 🔁 Swap Engine
- Smart contract router
- Liquidity pool integration
- Multi-token support

### ⛓️ Blockchain
- On-chain settlement
- Escrow contracts
- Transaction explorer links

### 📊 UX Enhancements
- Fee estimation
- Slippage warnings
- Swap history
- Transaction receipts

---

## 🧭 Roadmap

| Phase | Feature |
|------|---------|
| MVP | UI + Backend simulation |
| Phase 2 | Wallet integration |
| Phase 3 | Smart contract swaps |
| Phase 4 | Liquidity pools |
| Phase 5 | Cross-chain swaps |

---

## 🤝 Contribution

TRAC SWAP is open for community contributions focused on:

- TRAC ecosystem tooling
- DeFi UX design
- Swap infrastructure
- Wallet integrations

---

## 📜 License

Inherited from the upstream repository.

---

## 🧑‍💻 Author

Fork enhanced into **TRAC SWAP** with a TRAC-native swap interface, backend API integration, and DeFi UX improvements.
