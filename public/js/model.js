// ===== MODEL =====

// Fake rate
export const RATE = 2; // 1 TRAC = 2 USDT

// Calculate swap
export function calculateSwap(amount, slippage) {

  const output = amount * RATE;
  const minReceived = output - (output * (slippage / 100));

  return {
    output,
    minReceived
  };
}

// Generate fake tx hash
export function generateTxHash() {

  const chars = "abcdef0123456789";
  let hash = "0x";

  for (let i = 0; i < 64; i++) {
    hash += chars[Math.floor(Math.random() * chars.length)];
  }

  return hash;
}
