var mail = document.getElementById("mail");
var address = "fandruszkiewicz@gmail.com";
var chopAddress = address.split(/@|\./);

chopAddress.splice(1, 0, "@");
chopAddress.splice(-1, 0, ".");

for (var chopped = chopAddress.length-1; chopped >= 0; chopped--) {
  var mailChild = document.createElement('span');
  mailChild.innerText = chopAddress[chopped];
  mail.appendChild(mailChild);
}
if (mail) {
  mail.addEventListener("mouseover", addMail, false);
  mail.addEventListener("mouseout", removeMail, false);
}

function addMail() {
  mail.setAttribute("href", "mailto:" + address);
  console.log(mail.getAttribute("href"));
}

function removeMail() {
  mail.setAttribute("href", "#");
  console.log(mail.getAttribute("href"));
}