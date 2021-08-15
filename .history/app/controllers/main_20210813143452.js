import Phone from "./../models/Phone.js"
import ListPhone from "./../models/ListPhone.js"

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
        <a class="btn btn-primary w-100">Cart</a>
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
  let phoneSor = [];
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

let delegationSelectPhone = () => {
  let phoneType = [];
  let type = getEle("phoneType").value;
  if (type) {
    if (type === "Samsung") {
      filterType(phoneType, type)
    } else {
      filterType(phoneType, type)
    }
  } else {
    fetchData();
  }
}

getEle("phoneType").addEventListener("change", delegationSelectPhone)



let sortPhone = () => {
  listPhone
    .getListPhoneApi()
    .then((resp) => {
      let data = resp.data;
      let listPhone = [...data]
      for (let i = 0; i < listPhone.length; i++) {
        for (let j = listPhone.length - 1; j >= i; j--) {
          if (listPhone[i].name < listPhone[j].name) {
            let temp = listPhone[i];
            listPhone[i] = listPhone[j]
            listPhone[j] = temp;
          }
        }
      }
      renderView(listPhone)
    })
    .catch((err) => {
      console.log(err)
    })
}


let delegationSortPhone = () => {
  listPhone
    .getListPhoneApi()
    .then((resp) => {
      let type = getEle("sortPhone").value;
      if (type) {
        if (type === "a") {
          sortPhone(phoneType, type)
          let listSortPhone = resp.data;

          renderView(listSortPhone);
        } else {
          sortPhone(phoneType, type)
        }
      } else {
        fetchData();
      }
    })
    .catch((err) => {
      console.log(err)
    })
}


getEle("sortPhone").addEventListener("change", delegationSortPhone)