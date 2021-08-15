"use strict"
function getEle(id) {
  return document.getElementById(id);
}

var listProductInCart = JSON.parse(localStorage.getItem("listProductInCart")) || [];




const renderView = (arr) => {
  let html = '';
  let divTotalMoney = document.querySelector(".total-money");
  let tBodyCart = getEle("tBodyCart");
  if (arr.length > 0) {
    let totalMoney = 0;
    arr.forEach(phone => {
      phone.total = phone.price * phone.quantity;
      totalMoney += phone.total;

      html += `
    <tr>
    <th>
      <img style="width: 150px"
        src="${phone.img}" alt=""
        class="img-fluid">
    </th>
    <th>
      ${phone.name}
    </th>
    <th>
      ${phone.price}$
    </th>
    <th class="d-flex align-items-center">
      <p>${phone.quantity}</p>
      <div class="input-group mb-3">
        <div class="input-group-prepend mr-1" id="button-addon3">
          <button class="btn btn-info" type="button">-</button>
        </div>
        <div class="input-group-append" id="button-addon3">
          <button class="btn btn-info" type="button">+</button>
        </div>
      </div>
    </th>
    <th>
      ${phone.total}
    </th>
  </tr>
    `
    });
    tBodyCart.innerHTML = html;
    let hmtlTotal = `
    <h3 class="total-title mr-3">Tổng tiền</h3>
    <h3 class="total mr-3">${totalMoney}$</h3>
    <a class="btn btn-info" data-action="payment">Thanh toán</a>
    `
    divTotalMoney.innerHTML = hmtlTotal;
  }
}

renderView();

const delegationDivTotal = (e) => {
  let action = e.target.getAttribute("data-action");

  if (action === "payment") {
    localStorage.removeItem("listProductInCart")
  }
}

document.querySelector(".total-money").addEventListener("click", delegationDivTotal)