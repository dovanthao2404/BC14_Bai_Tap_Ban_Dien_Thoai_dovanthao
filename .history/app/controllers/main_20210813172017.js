import Phone from "./../models/Phone.js"
import ListPhone from "./../models/ListPhone.js"


var listProductInCart = localStorage.getItem("listProductInCart") || [];



let getEle = (id) => {
  return document.getElementById(id)
}

let listPhone = new ListPhone();


let renderView = (arr) => {
  let html = ""
  arr.forEach((phone) => {
    html += `
    <div class="col-3 mb-3">
    <div class="card overflow-hidden h-100">
      <img
        src="${phone.img}"
        alt="" class="card-img-top">
      <div class="card-body">
        <h4 class=card-title>
        ${phone.name}
        </h4>
        <p class="card-text">${phone.desc}</p>
        </div>
        <div class="card-footer">
        <a data-action="add" class="btn btn-primary w-100">Cart</a>
        </div>
    </div>
  </div>
    `
  })
  getEle("listPhoneView").innerHTML = html

}

let fetchData = () => {
  listPhone
    .getListPhoneApi()
    .then((resp) => {
      renderView(resp.data)
    })
    .catch((err) => {
      console.log(err)
    })
}

fetchData()

let filterType = (phoneType, type) => {
  listPhone
    .getListPhoneApi()
    .then((resp) => {
      let data = resp.data;
      data.forEach((phone) => {
        if (phone.type === type) {
          phoneType.push(phone);
        }
      })
      renderView(phoneType)
    })
    .catch((err) => {
      console.log(err)
    })
}

let sortPhone = (arr, valueSort) => {

  for (let i = 0; i < listPhone.length; i++) {
    for (let j = listPhone.length - 1; j >= i; j--) {
      if (listPhone[i].name < listPhone[j].name && valueSort === 1) {
        let temp = listPhone[i];
        listPhone[i] = listPhone[j]
        listPhone[j] = temp;
      } else {
        let temp = listPhone[i];
        listPhone[i] = listPhone[j]
        listPhone[j] = temp;
      }
    }
  }
  renderView(listPhone)
}



let delegationSortPhone = () => {
  listPhone
    .getListPhoneApi()
    .then((resp) => {
      let type = getEle("sortPhone").value;
      if (type) {
        if (type === "a") {
          sortPhone(1)
          let listSortPhone = resp.data;

          renderView(listSortPhone);
        } else {
          sortPhone(0)
          let listSortPhone = resp.data;
          renderView(listSortPhone);
        }
      } else {
        fetchData();
      }
    })
    .catch((err) => {
      console.log(err)
    })
}




let delegationSelect = () => {
  let phoneType = [];
  let type = getEle("phoneType").value;
  let filterPhone = getEle("sortPhone").value;
  if (type && filterPhone) {
    if (type === "Samsung" && filterPhone === "a") {
      filterType(phoneType, type);
      sortPhone(phoneType, 1);
    } else if (type === "Samsung" && filterPhone === "z") {

    } else if (type === "Iphone" && filterPhone === "a") {

    } else {

    }

  } else if (type && !filterPhone) {
    if (type === "Samsung") {

    } else {

    }

  } else if (!type && filterPhone) {
    if (filterPhone === "a") {

    } else {

    }

  }
}

getEle("phoneType").addEventListener("change", delegationSelect)
getEle("sortPhone").addEventListener("change", delegationSelect)


const delegationListPhoneView = (e) => {
  if (e.target.getAttribute("data-action") === "add") {
    listProductInCart
  }
}


getEle("listPhoneView").addEventListener("click", delegationListPhoneView)