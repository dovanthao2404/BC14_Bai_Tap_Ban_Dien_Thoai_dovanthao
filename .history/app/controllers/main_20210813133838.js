import Phone from "./../models/Phone.js"
import ListPhone from "./../models/ListPhone.js"

let listPhone = new ListPhone();

let fetchData = listPhone.getListPhoneApi();

fetchData
  .then(function () {
    console.log(data.data)
  })