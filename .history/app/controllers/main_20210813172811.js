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
  for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length - 1; j >= i; j--) {
      if (arr[i].name < arr[j].name && valueSort === 1) {
        let temp = arr[i];
        arr[i] = arr[j]
        arr[j] = temp;
      } else {
        let temp = arr[i];
        arr[i] = arr[j]
        arr[j] = temp;
      }
    }
  }
  console.log(arr)
  renderView(arr)
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
      filterType(phoneType, type);
      sortPhone(phoneType, 0);

    } else if (type === "Iphone" && filterPhone === "a") {
      filterType(phoneType, type);
      sortPhone(phoneType, 1);

    } else {
      filterType(phoneType, type);
      sortPhone(phoneType, 0);

    }

  } else if (type && !filterPhone) {
    filterType(phoneType, type);
  } else if (!type && filterPhone) {
    if (filterPhone === "a") {
      sortPhone(phoneType, 1);

    } else {
      sortPhone(phoneType, 0);

    }

  } else {
    fetchData()
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