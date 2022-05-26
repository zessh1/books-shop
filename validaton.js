const body = document.querySelector("body")
const main = document.createElement("main")
const div = document.createElement("div")
const name_box = document.createElement("div")
const name = document.createElement("input")
const name_label = document.createElement("label")
const surname_box = document.createElement("div")
const surname = document.createElement("input")
const surname_label = document.createElement("label")
const date_box = document.createElement("div")
const delivery_date =document.createElement("input")
const date_label = document.createElement("label")
const street_box = document.createElement("div")
const street =document.createElement("input")
const street_label = document.createElement("label")
const house_box = document.createElement("div")
const house_number =document.createElement("input")
const house_label = document.createElement("label")
const flat_box = document.createElement("div")
const flat_number =document.createElement("input")
const flat_label = document.createElement("label")
const radio_cash_box = document.createElement("div")
const radio_card_box = document.createElement("div")
const radio_cash_btn = document.createElement("input")
const radio_card_btn = document.createElement("input")
const radio_cash_label = document.createElement("label")
const radio_card_label = document.createElement("label")
const pack_gift_box = document.createElement("div")
const gift_pack_check = document.createElement("input")
const gift_pack_label = document.createElement("label")
const postcard_gift_box = document.createElement("div")
const gift_postcard_check = document.createElement("input")
const gift_postcard_label = document.createElement("label")
const discount_gift_box = document.createElement("div")
const gift_discount_check = document.createElement("input")
const gift_discount_label = document.createElement("label")
const branded_gift_box = document.createElement("div")
const gift_branded_check = document.createElement("input")
const gift_branded_label = document.createElement("label")
const radio_box = document.createElement("div")
const gift_box = document.createElement("div")
const complete = document.createElement("button")
const gift_title = document.createElement("div")
const radio_title = document.createElement("div")

radio_box.classList.add("radio-box")
gift_box.classList.add("gift-box")
body.classList.add("validation-body")
div.classList.add("validation-box")
name.classList.add("valid-inputs")
surname.classList.add("valid-inputs")
delivery_date.classList.add("valid-inputs")
street.classList.add("valid-inputs")
house_number.classList.add("valid-inputs")
flat_number.classList.add("valid-inputs")
radio_cash_btn.classList.add("radio-cash-btn")
radio_card_btn.classList.add("radio-card-btn")
radio_card_btn.classList.add("radio-card-label")
radio_cash_box.classList.add("radio-cash-box")
radio_card_box.classList.add("radio-card-box")
pack_gift_box.classList.add("check-gift-box")
gift_pack_check.classList.add("gift-check")
postcard_gift_box.classList.add("postcard-gift-box")
gift_postcard_check.classList.add("gift-check")
discount_gift_box.classList.add("discount-gift-box")
gift_discount_check.classList.add("gift-check")
branded_gift_box.classList.add("branded-gift-box")
gift_branded_check.classList.add("gift-check")
complete.classList.add("complete")
name_box.classList.add("input-cont")
surname_box.classList.add("input-cont")
date_box.classList.add("input-cont")
street_box.classList.add("input-cont")
house_box.classList.add("input-cont")
flat_box.classList.add("input-cont")

name.setAttribute("type", "text")
name.setAttribute("required","")
name.setAttribute("pattern","[a-zA-Z]+")
name.setAttribute("minlength","4")
surname.setAttribute("type", "text")
surname.setAttribute("required","")
surname.setAttribute("pattern", "[a-zA-Z]+")
surname.setAttribute("minlength", "5")
delivery_date.setAttribute("type","date")
delivery_date.setAttribute("required","")
delivery_date.setAttribute("min","2022-05-27")
street.setAttribute("type","text")
street.setAttribute("required","")
street.setAttribute("minlength","5")
street.setAttribute("pattern","[a-zA-Z0-9][a-zA-Z0-9-( )]+")
house_number.setAttribute("type","number")
house_number.setAttribute("required","")
house_number.setAttribute("required","")
house_number.setAttribute("pattern","[1-9][0-9]*")
flat_number.setAttribute("type","number")
flat_number.setAttribute("required","")
flat_number.setAttribute("pattern","[1-9][0-9]*(-[1-9][0-9]*)*")
radio_cash_btn.setAttribute("type","radio")
radio_cash_btn.setAttribute("value","cash")
radio_cash_btn.setAttribute("name","pay")
radio_cash_label.setAttribute("for","cash")
radio_card_btn.setAttribute("type","radio")
radio_card_btn.setAttribute("value","cash")
radio_card_btn.setAttribute("name","pay")
radio_card_label.setAttribute("for","cash")
gift_pack_check.setAttribute("type","checkbox")
gift_pack_check.setAttribute("name","gift")
gift_pack_label.setAttribute("for", "pack")
gift_postcard_check.setAttribute("type","checkbox")
gift_postcard_check.setAttribute("name","gift")
gift_postcard_label.setAttribute("for", "postcard")
gift_discount_check.setAttribute("type","checkbox")
gift_discount_check.setAttribute("name","gift")
gift_discount_label.setAttribute("for", "discount")
gift_branded_check.setAttribute("type","checkbox")
gift_branded_check.setAttribute("name","gift")
gift_branded_label.setAttribute("for", "branded")

name_label.innerText = "Name "
surname_label.innerText = "Surname "
date_label.innerText = "Delivery Date "
street_label.innerText = "Street "
house_label.innerText = "House Number "
flat_label.innerText = "Flat Number "
radio_card_label.innerText = "payment type Card"
radio_cash_label.innerText = "payment type Cash"
gift_pack_label.innerText = "pack as a gift"
gift_postcard_label.innerText = "add postcard"
gift_discount_label.innerText = "provide 2% discount to the next time"
gift_branded_label.innerText = "branded pen or pencil"
complete.innerText = "Complete"
radio_title.innerText = "Payment type:"
radio_title.style.fontFamily = "Georgia";
gift_title.innerText = "Choose 2 gift: "
gift_title.style.fontFamily = "Georgia"

radio_cash_btn.checked = true;

body.appendChild(main)
main.appendChild(div)
div.appendChild(name_box)
name_box.appendChild(name_label)
name_box.appendChild(name)
div.appendChild(surname_box)
surname_box.appendChild(surname_label)
surname_box.appendChild(surname)
div.appendChild(date_box)
date_box.appendChild(date_label)
date_box.appendChild(delivery_date)
div.appendChild(street_box)
street_box.appendChild(street_label)
street_box.appendChild(street)
div.appendChild(house_box)
house_box.appendChild(house_label)
house_box.appendChild(house_number)
div.appendChild(flat_box)
flat_box.appendChild(flat_label)
flat_box.appendChild(flat_number)
div.appendChild(radio_box)
radio_box.appendChild(radio_title)
radio_box.appendChild(radio_cash_box)
radio_box.appendChild(radio_card_box)
radio_cash_box.appendChild(radio_cash_btn)
radio_cash_box.appendChild(radio_cash_label)
radio_card_box.appendChild(radio_card_btn)
radio_card_box.appendChild(radio_card_label)
div.appendChild(gift_box)
gift_box.appendChild(gift_title)
gift_box.appendChild(pack_gift_box)
pack_gift_box.appendChild(gift_pack_check)
pack_gift_box.appendChild(gift_pack_label)
gift_box.appendChild(postcard_gift_box)
postcard_gift_box.appendChild(gift_postcard_check)
postcard_gift_box.appendChild(gift_postcard_label)
gift_box.appendChild(discount_gift_box)
discount_gift_box.appendChild(gift_discount_check)
discount_gift_box.appendChild(gift_discount_label)
gift_box.appendChild(branded_gift_box)
branded_gift_box.appendChild(gift_branded_check)
branded_gift_box.appendChild(gift_branded_label)
div.appendChild(complete)


complete.addEventListener("click", function (){
    const inputs = document.getElementsByClassName("valid-inputs");
    input_data = []
    for (let i = 0; i <inputs.length; i++ ) {
        let element = inputs[i]
        input_data.push(element.value)
        console.log(input_data)
    }
    alert(`The order created.\n The delivery address is ${input_data[3]} House ${input_data[4]}, flat ${input_data[5]}.\n Customer ${input_data[0]} ${input_data[1]}. `)
    window.location.href = "book.html"

})
function isValid() {
    let inputs = document.getElementsByClassName("valid-inputs");

    for (let i=0; i< inputs.length; i++) {
        let element = inputs[i];
        if (element.validity.valid == false) {
            return false;
        }
    }
    return true;
}

const inputs = document.getElementsByClassName("valid-inputs");

function addEv() {
    updateValue();
    for (let i=0; i< inputs.length; i++) {
        inputs[i].addEventListener('change', updateValue);
    }
}
addEv();

function updateValue(e) {
    complete.disabled = !isValid();
}

function onlytwoCheckBox() {
    var checkboxgroup = document.getElementsByClassName("gift-check")
    var limit = 2;
    for (var i = 0; i < checkboxgroup.length; i++) {
        checkboxgroup[i].onclick = function() {
            var checkedcount = 0;
            for (var i = 0; i < checkboxgroup.length; i++) {
                checkedcount += (checkboxgroup[i].checked) ? 1 : 0;
            }
            if (checkedcount > limit) {
                console.log("You can select maximum of " + limit + " checkbox.");
                alert("You can select maximum of " + limit + " checkbox.");
                this.checked = false;
            }
        }
    }
}
onlytwoCheckBox()

