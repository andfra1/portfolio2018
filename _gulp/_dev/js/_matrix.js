$(document).ready(function () {
  var ws = window.screen;
  var width = matrix.width = ws.width;
  var height = matrix.height = ws.height;
  var yPositions = Array(300).join(0).split('');
  var ctx = matrix.getContext('2d');
  var i = 0;

  var draw = function () {
    ctx.fillStyle = 'rgba(255,255,255,.1)';
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = '#e0e0e0';
    ctx.font = '10pt rubik';
    yPositions.map(function (y, index) {
      //text = Math.floor(Math.random() * 2);
      text = 'htmlcssjavascriptphpjquerygulpbootstrapwordpressjoomlacmsrwd';
      text.split('');
      text = text[Math.floor(Math.random() * text.length)];
      x = (index * 10) + 10;
      matrix.getContext('2d').fillText(text, x, y);
      if (y > 100 + Math.random() * 40000) {
        yPositions[index] = 0;
      } else {
        yPositions[index] = y + 12;
      }
    });
  };
  doEffect();

  function doEffect() {
    if (typeof si != "undefined") clearInterval(si);
    si = setInterval(draw, 35);
  }
});