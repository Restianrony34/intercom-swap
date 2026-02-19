// ===== VIEW =====

export function updateStatus(message) {
  document.getElementById("status").innerHTML = message;
}

export function getInputAmount() {
  return document.querySelectorAll("input")[0].value;
}

export function getSlippage() {
  return document.getElementById("slippageInput").value;
}
