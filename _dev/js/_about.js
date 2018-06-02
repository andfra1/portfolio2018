
var aboutp = document.getElementsByClassName('about__p');
var span = [];
var arr = [];
for (var i = 0; i < aboutp.length; i++) {
  span = [];
  var text = aboutp[i].innerText; //weź text
  split = text.split(''); //podziel go
  for (var j = 0; j < split.length; j++) {
    if(split[j] !== ' ') { //sprawdź czy to nie jest spacja przypadkiem
    span.push('<span>' + split[j] + '</span>'); //dodaj span do liter
    }
    else {
      span.push('<span>&nbsp;</span>');
    }
  }
  arr.push(span.join('')); //dodaj do tablicy
  aboutp[i].innerHTML = arr[i];
}