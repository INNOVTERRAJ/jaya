require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Endpoint for short love messages
app.get('/api/messages', (req, res) => {
  res.json({
    messages: [
      "she loves masala chai !.",
      "Her birthday is on 2 November.",
      "she fantasizes bollywood movies alot, duh!.",
      "she loves countries like paris,switzerland and more,I m just not sure which one is her favourite.",
      "In her childhood she really liked Milla Jovovich(the character from resident evi).",
      "she can sing really well.",
      "she is into tall and handsome guys,which makes me perfect for her:))",
    ]
  });
});

// Endpoint for a full, heartfelt love letter
app.get('/api/letter', (req, res) => {
  const letter = `
My baby Jaya,

Every beat of my heart resonates with the love I have for you. From the moment our paths crossed,I knew you were someone special.

you are simply the best and i love you so much and i am so lucky to have you in my life.

I cherish every memory, every moment we share, and eagerly await the future that holds endless love and joy.

Forever yours,
Raj
  `;
  res.json({ letter });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
