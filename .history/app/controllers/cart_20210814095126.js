"use strict"
function getEle(id) {
  return document.getElementById(id);
}

var listProductInCart = localStorage.getItem("listProductInCart") || [];


const cart = () => {
  let tBodyCart = getEle("tBodyCart");

  let listProductCart = JSON.pase(listProductInCart);

  listProductCart.forEach(element => {

  });

}