// Dummy Balance (you can replace this with dynamic data later)
let currentBalance = 0.00;

// Function to handle withdrawal form submission
document.getElementById("withdrawForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent the form from submitting

    // Get the withdrawal amount from the input field
    const withdrawAmount = parseFloat(document.getElementById("withdrawAmount").value);

    // Check if the withdrawal amount is valid
    if (withdrawAmount > 0 && withdrawAmount <= currentBalance) {
        // Update the current balance
        currentBalance -= withdrawAmount;

        // Update the balance display
        document.getElementById("currentBalance").textContent = `$${currentBalance.toFixed(2)}`;

        // Show confirmation message
        const confirmationMessage = document.getElementById("confirmationMessage");
        const confirmationText = document.getElementById("confirmationText");
        
        confirmationMessage.classList.remove("hidden");
        confirmationText.textContent = `You have successfully withdrawn $${withdrawAmount.toFixed(2)}.`;

        // Reset the input field
        document.getElementById("withdrawAmount").value = '';
    } else {
        // Show an error if the withdrawal is invalid
        const confirmationMessage = document.getElementById("confirmationMessage");
        const confirmationText = document.getElementById("confirmationText");

        confirmationMessage.classList.remove("hidden");
        confirmationText.textContent = `Error: You cannot withdraw more than your current balance ($${currentBalance.toFixed(2)}).`;
    }
});
