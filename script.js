// Display loading screen for 1.5 seconds
window.onload = function() {
  setTimeout(() => {
    // Hide the loading screen
    document.getElementById("loadingScreen").style.display = "none";
    
    // Show the main content
    document.getElementById("mainContent").classList.add("show");
  }, 1500); // 1.5 seconds delay
};

// JavaScript to handle dynamic behaviors
const connectButton = document.getElementById("connectButton");
const checkAdressBalanceButton = document.getElementById("checkAdressBalanceButton");
const typeAdressInput = document.getElementById("typeAdress");
const sendEtherButton = document.getElementById("sendEtherButton");
const checkBalanceButton = document.getElementById("checkBalanceButton");

connectButton.addEventListener("click", () => {
  connectButton.style.display = "none";
  checkAdressBalanceButton.style.display = "table";
  typeAdressInput.disabled = false;
  sendEtherButton.disabled = false;
  checkBalanceButton.disabled = false;
});
