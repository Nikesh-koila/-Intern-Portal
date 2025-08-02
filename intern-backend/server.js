const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/intern", (req, res) => {
  res.json({
    name: "Alex",
    referralCode: "alex2025",
    donations: 2500,
  });
});

app.get("/leadboard", (req, res) => {
  res.json([
    { name: "Sarah Chen", donations: 5200 },
    { name: "Mike Davis", donations: 4800 },
    { name: "Alex Johnson", donations: 3400 },
    { name: "Emma Wilson", donations: 2900 },
    { name: "John Smith", donations: 2100 },
  ]);
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
