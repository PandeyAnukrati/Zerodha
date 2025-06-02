# 🚀 Zerodha Clone

A **full-stack stock trading simulation platform** inspired by **Zerodha**, India’s largest discount brokerage.  
Experience core features like user authentication, portfolio management, simulated order execution, and transaction history — built to understand real-world financial platforms.

---

## 📘 About Zerodha

**Zerodha** is India’s leading discount stockbroker, known for:

- 🆓 Zero brokerage on equity delivery trades  
- 💸 Flat ₹20 fee on intraday & Futures & Options (F&O) trades  
- 📈 Investing options including Stocks, IPOs, Mutual Funds, Commodities, Currencies, and F&O  
- 🔍 Simple UI, transparent pricing & developer-friendly APIs

Zerodha revolutionized stock trading by making it affordable and accessible to everyone.

---

## ✨ Features

- 🔐 Secure user registration & login (JWT authentication)  
- 📊 Real-time portfolio & market dashboard  
- 💰 Simulated buy & sell order placement  
- 📝 Transaction history and order tracking  
- 📱 Responsive, intuitive UI  
- 🔒 Password hashing & session management  
- ⚙️ Clean RESTful APIs with MVC architecture  

---

## 🛠 Technologies Used

### Frontend
- React.js / Next.js  
- Tailwind CSS / Bootstrap  
- Responsive & accessible UI/UX  

### Backend
- Node.js & Express.js  
- MongoDB & Mongoose  
- JWT for authentication  
- bcrypt.js for password security  

### Tools & Practices
- Postman for API testing  
- Git & GitHub version control  
- Environment management with Dotenv  
- Middleware for route protection & error handling  
- MVC design pattern  

---

## ⚡ Getting Started

```bash
# Clone repo
git clone https://github.com/yourusername/zerodha-clone.git
cd zerodha-clone

# Install backend dependencies
cd backend
npm install

# Create .env file with:
# MONGODB_URI=your_mongodb_connection_string
# JWT_SECRET=your_jwt_secret

# Start backend server
npm start

# Open a new terminal tab for frontend
cd ../frontend
npm install
npm start
