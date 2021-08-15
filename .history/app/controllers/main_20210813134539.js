import Phone from "./../models/Phone.js"
import ListPhone from "./../models/ListPhone.js"

let listPhone = new ListPhone();


let renderView = (arr) => {

  for (let i = 0; i < arr.length; i++) {

  }
}

let fetchData = () => {
  listPhone
    .getListPhoneApi()
    .then((resp) => {
      console.log(resp.data)
      renderView(resp.data)
    })
    .catch((err) => {
      console.log(err)
    })
}

fetchData()