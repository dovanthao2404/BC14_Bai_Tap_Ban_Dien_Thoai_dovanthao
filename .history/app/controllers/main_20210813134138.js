import Phone from "./../models/Phone.js"
import ListPhone from "./../models/ListPhone.js"

let listPhone = new ListPhone();

let fetchData = () => {
  listPhone
    .getListPhoneApi()
    .then((resp) => {
      console.log(resp.data);
    })
}

fetchData
  .then((resp) => {
    console.log(resp.data)
  })