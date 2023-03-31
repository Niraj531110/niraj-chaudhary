// Display an alert message when the page is loaded
window.onload = function() {
  alert("Hello TEJ!");
}

// Get the input elements
const price1 = document.getElementById('price1');
const quantity1 = document.getElementById('quantity1');
const total1 = document.getElementById('total1');
const price2 = document.getElementById('price2');
const quantity2 = document.getElementById('quantity2');
const total2 = document.getElementById('total2');
const total3 = document.getElementById('total3');
const vat = document.getElementById('vat');
const tip = document.getElementById('tip');
const total4 = document.getElementById('total4');

// Increase the quantity of the corresponding section when the '+' button is clicked
function increaseQuantity(element) {
  document.getElementById(element).stepUp(1);
}

// Decrease the quantity of the corresponding section when the '-' button is clicked
function decreaseQuantity(element) {
  document.getElementById(element).stepDown(1);
}

// Calculate the grand total
function calculateTotal() {
  // Calculate the total price of Samosa section
  const samosaTotal = price1.value * quantity1.value;
  total1.value = samosaTotal;

  // Calculate the total price of Tea section
  const teaTotal = price2.value * quantity2.value;
  total2.value = teaTotal;

  // Calculate the total price of both sections
  const total = samosaTotal + teaTotal;
  total3.value = total;

  // Calculate the Vat and Tip
  const vatAmount = total * 0.13;
  vat.value = vatAmount.toFixed(2);
  const tipAmount = total * 0.1;
  tip.value = tipAmount.toFixed(2);

  // Calculate the grand total
  const grandTotal = total + vatAmount + tipAmount;
  total4.value = grandTotal.toFixed(2);
}

// Add event listeners to the price and quantity inputs
price1.addEventListener('input', calculateTotal);
quantity1.addEventListener('input', calculateTotal);
price2.addEventListener('input', calculateTotal);
quantity2.addEventListener('input', calculateTotal);
