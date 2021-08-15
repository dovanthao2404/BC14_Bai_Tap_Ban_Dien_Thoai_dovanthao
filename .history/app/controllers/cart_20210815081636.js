"use strict"
function getEle(id) {
  return document.getElementById(id);
}

var listProductInCart = JSON.parse(localStorage.getItem("listProductInCart")) || [];




const renderView = (arr) => {
  let html = '';
  let hmtlTotal = '';
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
    <th class="phone-quantity d-flex align-items-center">
      <p>${phone.quantity}</p>
      <div class="input-group mb-3">
        <div class="input-group-prepend mr-1">
          <button data-action="subtract" data-phone=${phone.id} class="btn btn-primary" type="button">-</button>
        </div>
        <div class="input-group-append">
          <button data-action="add" data-phone=${phone.id} class="btn btn-primary" type="button">+</button>
        </div>
      </div>
    </th>
    <th>
      ${phone.total}
    </th>
    <th>
      <a data-action="delete" data-phone=${phone.id} class="btn btn-primary">
      <i class="fa fa-times"></i>
      </a>
    </th>
  </tr>
    `
    });
    hmtlTotal = `
    <h3 class="total-title mr-3">Tổng tiền</h3>
    <h3 class="total mr-3">${totalMoney}$</h3>
    <a class="btn btn-primary" data-action="payment">Thanh toán</a>
    `
  }

  tBodyCart.innerHTML = html;
  divTotalMoney.innerHTML = hmtlTotal;
}

renderView(listProductInCart);

const delegationDivTotal = (e) => {
  let action = e.target.getAttribute("data-action");

  if (action === "payment") {
    localStorage.removeItem("listProductInCart")
    renderView([])
  }
}

document.querySelector(".total-money").addEventListener("click", delegationDivTotal)



const delegationCart = (e) => {
  let dataAction = e.target.getAttribute("data-action");
  let idPhone = e.target.getAttribute("data-phone");
  if (dataAction === "delete") {
    listProductInCart = listProductInCart.filter(() => {

    })

  } else if (dataAction === "add") {

  } else {

  }
}

getEle("listPhoneCart").addEventListener("click", delegationCart)