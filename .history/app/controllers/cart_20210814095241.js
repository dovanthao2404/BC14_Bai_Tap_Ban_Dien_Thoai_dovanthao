"use strict"
function getEle(id) {
  return document.getElementById(id);
}

var listProductInCart = localStorage.getItem("listProductInCart") || [];


const cart = () => {
  let tBodyCart = getEle("tBodyCart");
  let listProductCart = JSON.pase(listProductInCart);
  let html = '';


  listProductCart.forEach(element => {
    html += `
    <tr>
    <th>
      <img style="width: 200px"
        src="https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-600x600.jpg" alt=""
        class="img-fluid">
    </th>
    <th>
      S20
    </th>
    <th>
      1000$
    </th>
    <th class="d-flex align-items-center">
      <p>1</p>
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
      1000$
    </th>
  </tr>
    `
  });

}