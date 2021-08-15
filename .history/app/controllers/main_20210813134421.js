import Phone from "./../models/Phone.js"
import ListPhone from "./../models/ListPhone.js"

let listPhone = new ListPhone();

let fetchData = () => {
  listPhone
    .getListPhoneApi()
    .then((resp) => {

    })
    .catch((err) => {
      console.log(err)
    })
}

fetchData()