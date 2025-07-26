// ✅ Import required modules
const express = require('express');
const cors = require('cors');

// ✅ Create Express app
const app = express();
const PORT = 5000;

// ✅ Enable CORS
app.use(cors());

// ✅ Optional route for root "/"
app.get("/", (req, res) => {
  res.send("✅ Food Price Compare Backend Running");
});

// ✅ Main API: /api/search?item=milk
app.get('/api/search', (req, res) => {
  const { item } = req.query;
  if (!item) {
    return res.status(400).json({ error: "Missing item query" });
  }

  const data = {
    milk: [
      { platform: 'BigBasket', store: 'More', price: 40, link: 'https://bigbasket.com' },
      { platform: 'Amazon Fresh', store: 'Amazon', price: 42, link: 'https://amazon.in' },
      { platform: 'Zomato', store: 'Local Vendor', price: 38, link: 'https://zomato.com' }
    ],
    rice: [
      { platform: 'BigBasket', store: 'Reliance', price: 50, link: 'https://bigbasket.com' },
      { platform: 'Amazon Fresh', store: 'Amazon', price: 55, link: 'https://amazon.in' }
    ],
    bread: [
      { platform: 'BigBasket', store: 'More', price: 25, link: 'https://bigbasket.com' },
      { platform: 'Swiggy', store: 'Local Bakery', price: 28, link: 'https://swiggy.com' }
    ],
    sugar: [
      { platform: 'Amazon Fresh', store: 'Amazon', price: 40, link: 'https://amazon.in' },
      { platform: 'BigBasket', store: 'More', price: 38, link: 'https://bigbasket.com' }
    ],
    tomato: [
      { platform: 'BigBasket', store: 'Reliance', price: 30, link: 'https://bigbasket.com' },
      { platform: 'Amazon Fresh', store: 'Amazon', price: 32, link: 'https://amazon.in' }
    ]
  };

  const keyword = item.toLowerCase();
  res.json(data[keyword] || []);
});

// ✅ Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
