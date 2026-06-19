require('dotenv').config();
const express = require('express');
const ConnectDB = require("./config/db");
const UserRoutes = require('./routes/user');
const PortfolioRoutes = require('./routes/portfolio');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Routes  
app.use('/portfolio', PortfolioRoutes);
app.use('/user',UserRoutes);
ConnectDB();

app.listen(PORT, () => {
    console.log("Server is running on porrt", PORT);
})

