const express = require('express');
const app = express();
const port = 3000; // You can choose a different port

// Define a GET route to fetch data from the Harry Potter API
app.get('/get_hp_characters', async (req, res) => {
  const api_url = 'https://hp-api.onrender.com/api/characters';
  
  try {
    const response = await fetch(api_url);
    if (response.ok) {
      const data = await response.json();
      console.log(data)
      res.json(data);
    } else {
      res.status(500).json({ error: 'Failed to fetch data from the API' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
