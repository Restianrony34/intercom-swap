import { calculateSwap, generateTxHash } from "./model.js";
import { updateStatus, getInputAmount, getSlippage } from "./view.js";

window.startSwap = function () {

  const amount = getInputAmount();
  const slippage = getSlippage();

  if (!amount || amount <= 0) {
    updateStatus("⚠️ Enter TRAC amount");
    return;
  }

  const { output, minReceived } =
    calculateSwap(amount, slippage);

  updateStatus(`
    ⏳ Swapping ${amount} TRAC → ${output.toFixed(2)} USDT<br>
    Min received: ${minReceived.toFixed(2)} USDT
  `);

  setTimeout(() => {
    updateStatus("🔒 Escrow locked on TRAC Chain");
  }, 1500);

  setTimeout(() => {
    updateStatus("🔄 Processing transfer");
  }, 3000);

  setTimeout(() => {
    const tx = generateTxHash();
    updateStatus(`✅ Swap completed<br>Tx: ${tx}`);
  }, 4500);
};
