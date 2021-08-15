import Phone from "./../models/Phone.js"
import ListPhone from "./../models/ListPhone.js"

let listPhone = new ListPhone();


let renderView = (arr) => {
  let html = ""
  arr.forEach((phone) => {

  })


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