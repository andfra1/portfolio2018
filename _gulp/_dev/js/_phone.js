var phone = document.getElementById("phone");
var number = "886 552 562";
var chopNumber = number.split(' ');

for (var chopped = 2; chopped >= 0; chopped--) {
  var phoneChild = document.createElement('span');
  phoneChild.innerText = chopNumber[chopped];
  phone.appendChild(phoneChild);
}

if (phone) {
  phone.addEventListener("mouseover", addPhone, false);
  phone.addEventListener("mouseout", removePhone, false);
}

function addPhone() {
  phone.setAttribute("href", "tel:+48 " + number);
}

function removePhone() {
  phone.setAttribute("href", "#");
}