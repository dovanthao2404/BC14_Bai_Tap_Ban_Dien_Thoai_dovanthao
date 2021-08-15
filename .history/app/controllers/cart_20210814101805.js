"use strict"
function getEle(id) {
  return document.getElementById(id);
}

var listProductInCart = JSON.parse(localStorage.getItem("listProductInCart")) || [];


const cart = () => {
  let tBodyCart = getEle("tBodyCart");
  if (listProductInCart > 0) { }
  let html = '';

  listProductInCart.forEach(phone => {
    console.log(phone)
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
      ${phone.price}
    </th>
  </tr>
    `
  });
  tBodyCart.innerHTML = html;
}
}

cart();