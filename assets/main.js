var TREVOR = 'nope';
var font='100px Comic Sans MS, cursive, sans-serif';

var shit = $('#shit');
var showSomeShit = false;

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

$(document).ready(function(){
    animateDiv();
});

function makeNewPosition(){
    var h = $(window).height() - 100;
    var w = $(window).width() - 260;
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    return [nh,nw];
}

function animateDiv(){
    var newq = makeNewPosition();
    $('#shit').animate({ top: newq[0], left: newq[1] }, function(){
      animateDiv();
    });
};
