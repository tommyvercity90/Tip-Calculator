
const billInput = document.getElementById("bill");
const peopleInput = document.getElementById("people");
const customTipInput = document.getElementById("custom-tip");

const tipButtons = document.querySelectorAll(".tip-btn");
const errorMessage = document.getElementById("error");

const tipAmountDisplay = document.getElementById("tip-amount");
const totalBillDisplay = document.getElementById("total-bill");
const tipPerPersonDisplay = document.getElementById("tip-per-person");
const perPersonDisplay = document.getElementById("per-person");

const resetButton = document.getElementById("reset");

let tipPercentage = 15;

// Format a number as Indian Rupees.
function formatCurrency(amount) {
    return amount.toLocaleString("en-IN", {
        style: "currency",
        currency: "INR",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

// Update the displayed calculations.
function calculateTip() {
    const bill = Number(billInput.value);
    const people = Number(peopleInput.value);

    // Use custom percentage when entered.
    const customTipValue = customTipInput.value.trim();
    const tipRate = customTipValue === ""
        ? tipPercentage
        : Number(customTipValue);

    // Reset previous error.
    errorMessage.textContent = "";

    // Validate the bill amount.
    if (billInput.value.trim() === "" ||
        !Number.isFinite(bill) || bill < 0) {
        showResults(0, 0, 0, 0);
        errorMessage.textContent = "Please enter a valid bill amount.";
        return;
    }

    // Validate the tip percentage.
    if (!Number.isFinite(tipRate) || tipRate < 0) {
        showResults(0, 0, 0, 0);
        errorMessage.textContent =
            "Tip percentage must be zero or greater.";
        return;
    }

    // Prevent zero, negative, or fractional people.
    if (!Number.isInteger(people) || people < 1) {
        showResults(0, 0, 0, 0);
        errorMessage.textContent =
            "Number of people must be a whole number of at least 1.";
        return;
    }

    const tipAmount = bill * tipRate / 100;
    const totalBill = bill + tipAmount;

    const tipPerPerson = tipAmount / people;
    const totalPerPerson = totalBill / people;

    showResults(
        tipAmount,
        totalBill,
        tipPerPerson,
        totalPerPerson
    );
}

// Display all four results.
function showResults(tip, total, tipEach, totalEach) {
    tipAmountDisplay.textContent = formatCurrency(tip);
    totalBillDisplay.textContent = formatCurrency(total);
    tipPerPersonDisplay.textContent = formatCurrency(tipEach);
    perPersonDisplay.textContent = formatCurrency(totalEach);
}

// Handle preset tip buttons.
tipButtons.forEach((button) => {
    button.addEventListener("click", () => {
        tipPercentage = Number(button.dataset.tip);

        // Clear custom tip when selecting a preset.
        customTipInput.value = "";

        tipButtons.forEach((btn) => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        calculateTip();
    });
});

// Clear preset selection when custom tip is entered.
customTipInput.addEventListener("input", () => {
    tipButtons.forEach((button) => {
        button.classList.remove("active");
    });

    calculateTip();
});

// Update results live as the user types.
billInput.addEventListener("input", calculateTip);
peopleInput.addEventListener("input", calculateTip);

// Reset all inputs and restore the default tip.
resetButton.addEventListener("click", () => {
    billInput.value = "";
    peopleInput.value = "1";
    customTipInput.value = "";
    tipPercentage = 15;

    tipButtons.forEach((button) => {
        button.classList.toggle(
            "active",
            Number(button.dataset.tip) === 15
        );
    });

    calculateTip();
});

// Initialize the calculator.
calculateTip();
