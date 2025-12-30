document.getElementById("bookBtn").addEventListener("click", () => {
  alert("Booking feature coming soon!");
});
let cart = [];
let total = 0;

function toggleItem(btn) {
  const service = btn.parentElement;
  const name = service.dataset.name;
  const price = Number(service.dataset.price);

  const index = cart.findIndex(item => item.name === name);

  if (index === -1) {
    // ADD
    cart.push({ name, price });
    total += price;
    btn.textContent = "Remove Item";
    btn.classList.add("remove");
  } else {
    // REMOVE
    cart.splice(index, 1);
    total -= price;
    btn.textContent = "Add Item";
    btn.classList.remove("remove");
  }

  updateCart();
}

function updateCart() {
  const body = document.getElementById("cartBody");
  const totalEl = document.getElementById("total");

  body.innerHTML = "";

  cart.forEach((item, i) => {
    body.innerHTML += `
      <tr>
        <td>${i + 1}</td>
        <td>${item.name}</td>
        <td>${item.price.toFixed(2)}</td>
      </tr>
    `;
  });

  totalEl.textContent = `${total.toFixed(2)}`;
}
