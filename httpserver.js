const http = require("http");

const menProducts = [
  { id: 1, name: "Men's T-Shirt", price: 20 },
  { id: 2, name: "Men's Jeans", price: 40 },
  { id: 3, name: "Men's Jacket", price: 60 },
  { id: 4, name: "Men's Shoes", price: 80 },
  { id: 5, name: "Men's Hat", price: 15 },
  { id: 6, name: "Men's Watch", price: 120 },
  { id: 7, name: "Men's Sunglasses", price: 50 },
  { id: 8, name: "Men's Belt", price: 25 },
  { id: 9, name: "Men's Wallet", price: 30 },
  { id: 10, name: "Men's Socks", price: 10 },
];

const womenProducts = [
  { id: 1, name: "Women's Dress", price: 50 },
  { id: 2, name: "Women's T-Shirt", price: 25 },
  { id: 3, name: "Women's Skirt", price: 40 },
  { id: 4, name: "Women's Shoes", price: 70 },
  { id: 5, name: "Women's Handbag", price: 100 },
  { id: 6, name: "Women's Hat", price: 20 },
  { id: 7, name: "Women's Watch", price: 130 },
  { id: 8, name: "Women's Earrings", price: 35 },
  { id: 9, name: "Women's Necklace", price: 55 },
  { id: 10, name: "Women's Bracelet", price: 45 },
];

// Server
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  if (req.url === "/") {
    res.writeHead(200);
    res.end(JSON.stringify({ message: "Welcome to Men & Women Dummy Data" }));
  } else if (req.url === "/men") {
    res.writeHead(200);
    res.end(JSON.stringify(menProducts));
  } else if (req.url === "/women") {
    res.writeHead(200);
    res.end(JSON.stringify(womenProducts));
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ error: "Page not found" }));
  }
});

// Start the server
const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
