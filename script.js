document.addEventListener("DOMContentLoaded", () => {
  let cart = [];
  let total = 0;

  window.toggleItem = function (btn) {
    const service = btn.parentElement;
    const name = service.dataset.name;
    const price = Number(service.dataset.price);

    const index = cart.findIndex(item => item.name === name);

    if (index === -1) {
      cart.push({ name, price });
      total += price;
      btn.textContent = "Remove Item";
      btn.classList.add("remove");
    } else {
      cart.splice(index, 1);
      total -= price;
      btn.textContent = "Add Item";
      btn.classList.remove("remove");
    }

    updateCart();
  };

  function updateCart() {
    const body = document.getElementById("cartBody");
    const totalEl = document.getElementById("total");

    body.innerHTML = "";

    if (cart.length === 0) {
      body.innerHTML = `
        <tr>
          <td colspan="3" style="text-align:center; color:gray;">
            No items added
          </td>
        </tr>
      `;
      totalEl.textContent = "0.00";
      return;
    }

    cart.forEach((item, i) => {
      body.innerHTML += `
        <tr>
          <td>${i + 1}</td>
          <td>${item.name}</td>
          <td>${item.price.toFixed(2)}</td>
        </tr>
      `;
    });

    totalEl.textContent = total.toFixed(2);
  }

  updateCart(); // show empty message initially
});
