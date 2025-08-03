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

  // ✅ Simulated product data
  const data = {
    milk: [
      { platform: 'BigBasket', store: 'More', price: 40, link: 'https://www.bigbasket.com/' },
      { platform: 'Amazon Fresh', store: 'Amazon', price: 42, link: 'https://www.amazon.in/' },
      { platform: 'Zomato', store: 'Local Vendor', price: 38, link: 'https://www.zomato.com/' }
    ],
    rice: [
      { platform: 'BigBasket', store: 'Reliance', price: 50, link: 'https://www.bigbasket.com/' },
      { platform: 'Amazon Fresh', store: 'Amazon', price: 55, link: 'https://www.amazon.in/' },
      { platform: 'JioMart', store: 'JioMart', price: 52, link: 'https://www.jiomart.com/' }
    ],
    bread: [
      { platform: 'BigBasket', store: 'More', price: 25, link: 'https://www.bigbasket.com/' },
      { platform: 'Swiggy', store: 'Local Bakery', price: 28, link: 'https://www.swiggy.com/' }
    ],
    sugar: [
      { platform: 'Amazon Fresh', store: 'Amazon', price: 40, link: 'https://www.amazon.in/' },
      { platform: 'BigBasket', store: 'More', price: 38, link: 'https://www.bigbasket.com/' }
    ],
    tomato: [
      { platform: 'BigBasket', store: 'Reliance', price: 30, link: 'https://www.bigbasket.com/' },
      { platform: 'Amazon Fresh', store: 'Amazon', price: 32, link: 'https://www.amazon.in/' }
    ],
    onion: [
      { platform: 'JioMart', store: 'JioMart', price: 25, link: 'https://www.jiomart.com/' },
      { platform: 'Amazon Fresh', store: 'Amazon', price: 27, link: 'https://www.amazon.in/' },
      { platform: 'BigBasket', store: 'BigBasket', price: 24, link: 'https://www.bigbasket.com/' }
    ],
    potato: [
      { platform: 'Amazon Fresh', store: 'Amazon', price: 20, link: 'https://www.amazon.in/' },
      { platform: 'JioMart', store: 'JioMart', price: 22, link: 'https://www.jiomart.com/' }
    ],
    wheat: [
      { platform: 'BigBasket', store: 'More', price: 45, link: 'https://www.bigbasket.com/' },
      { platform: 'Amazon Fresh', store: 'Amazon', price: 48, link: 'https://www.amazon.in/' },
      { platform: 'JioMart', store: 'JioMart', price: 46, link: 'https://www.jiomart.com/' }
    ],
    oil: [
      { platform: 'Amazon Fresh', store: 'Amazon', price: 120, link: 'https://www.amazon.in/' },
      { platform: 'BigBasket', store: 'Reliance', price: 115, link: 'https://www.bigbasket.com/' }
    ],
    salt: [
      { platform: 'BigBasket', store: 'More', price: 18, link: 'https://www.bigbasket.com/' },
      { platform: 'Amazon Fresh', store: 'Amazon', price: 20, link: 'https://www.amazon.in/' }
    ],
    tea: [
      { platform: 'Amazon Fresh', store: 'Amazon', price: 138, link: 'https://www.amazon.in/' },//TATA
      { platform: 'BigBasket', store: 'More', price: 135, link: 'https://www.bigbasket.com/' }
    ],
    coffee: [
      { platform: 'Amazon Fresh', store: 'Amazon', price: 180, link: 'https://www.amazon.in/' },
      { platform: 'JioMart', store: 'JioMart', price: 175, link: 'https://www.jiomart.com/' }
    ]
  };

  const keyword = item.toLowerCase();
  res.json(data[keyword] || []);
});

// ✅ Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

