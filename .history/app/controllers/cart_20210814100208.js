"use strict"
function getEle(id) {
  return document.getElementById(id);
}

var listProductInCart = localStorage.getItem("listProductInCart") || [];


const cart = () => {
  let tBodyCart = getEle("tBodyCart");
  let listProductCart = []
  // if (listProductInCart) {
  //   console.log(listProductInCart)
  //   listProductCart = JSON.pase(listProductInCart);
}
let html = '';


listProductInCart.forEach(phone => {
  html += `
    <tr>
    <th>
      <img style="width: 200px"
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

cart();