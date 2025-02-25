document.addEventListener("DOMContentLoaded", () => {
  loadTransactions();
});

function addTransaction(event) {
  event.preventDefault();

  const description = document.getElementById("description").value.trim();
  const amount = parseFloat(document.getElementById("amount").value);
  const type = document.getElementById("type").value;

  if (description === "" || isNaN(amount) || amount <= 0) {
    alert("Please enter a valid description and amount.");
    return;
  }

  const transaction = {
    id: Date.now(),
    description,
    amount: type === "expense" ? -amount : amount,
    type
  };

  let transactions = JSON.parse(localStorage.getItem("transactions")) || [];
  transactions.push(transaction);
  localStorage.setItem("transactions", JSON.stringify(transactions));

  document.getElementById("transactionForm").reset();

  loadTransactions();
}

function loadTransactions() {
  const transactionList = document.getElementById("transactions");
  transactionList.innerHTML = "";
  
  let transactions = JSON.parse(localStorage.getItem("transactions")) || [];
  let balance = 0;
  let income = 0;
  let expenses = 0;

  transactions.forEach(transaction => {
    const li = document.createElement("li");
    li.className = transaction.type;
    li.innerHTML = `
      ${transaction.description} <span>${transaction.amount.toFixed(2)}</span>
      <button class="delete-btn" onclick="deleteTransaction(${transaction.id})">Remove</button>
    `;
    transactionList.appendChild(li);

    if (transaction.amount > 0) {
      income += transaction.amount;
    } else {
      expenses += Math.abs(transaction.amount);
    }
    balance += transaction.amount;
  });

  document.getElementById("balance").textContent = balance.toFixed(2);
  document.getElementById("income").textContent = income.toFixed(2);
  document.getElementById("expenses").textContent = expenses.toFixed(2);
}

function deleteTransaction(id) {
  let transactions = JSON.parse(localStorage.getItem("transactions")) || [];
  transactions = transactions.filter(transaction => transaction.id !== id);
  localStorage.setItem("transactions", JSON.stringify(transactions));
  loadTransactions();
}




document.getElementById("transactionForm").addEventListener("submit", addTransaction);

