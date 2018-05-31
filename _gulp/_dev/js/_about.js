var text = $('#about p').text().split('');

//console.log(text.length);
for(var i = 0; i < text.length; i++) {
  text[i] = '<span>'+ text[i] +'</span>';
}