const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

// Middleware for parsing JSON request bodies
app.use(bodyParser.json());
app.use(cors());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
let tags = [];

// POST - Create
app.post('/intro', (req, res) => {
  console.log('Received POST request body:', req.body);
  // ...
})

// GET - Read
app.get('/', (req, res) => {
  res.send('Server is running');
});

// PUT - Update


// DELETE - Delete
app.delete("/intro/:id", (req, res) => {
  const { id } = req.params;
  const index = tags.findIndex((tag) => tag.id === id);
  if (index !== -1) {
    tags.splice(index, 1);
    res.sendStatus(204);
  } else {
    res.status(404).json({ error: "Tag not found" });
  }
});

const PORT = process.env.PORT || 8005;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});