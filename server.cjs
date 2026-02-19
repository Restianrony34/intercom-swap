const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Serve frontend
app.use(express.static("public"));

// Swap API
app.post("/swap", (req, res) => {

  const { amount, slippage } = req.body;

  const RATE = 0.206;

  const output = amount * RATE;
  const minReceived =
    output - (output * (slippage / 100));

  const txHash = generateTxHash();

  res.json({
    output,
    minReceived,
    txHash
  });
});

// Fake tx hash
function generateTxHash(){
  const chars="abcdef0123456789";
  let hash="0x";

  for(let i=0;i<64;i++){
    hash+=chars[Math.floor(Math.random()*chars.length)];
  }

  return hash;
}

// Start server
app.listen(3000, ()=>{
  console.log("🚀 http://localhost:3000");
});
