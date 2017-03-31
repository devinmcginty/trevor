var TREVOR = 'nope';
var font='100px Comic Sans MS, cursive, sans-serif';

function draw() {
  particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });
  var canvas = $('#canv').get(0);

  //TODO this
  if (false) {
    //var ctx = canvas.getContext('2d');
    //$('#canv').height($('#container').height());
    //$('#canv').width($('#container').width());
    //ctx.font = font;
    //ctx.fillText(TREVOR, 0, 150);
  }
  else {
    var div = $('<div></div>')
                .addClass('bigtext')
                .text(TREVOR);
    $('#container').append(div)
  }
}
