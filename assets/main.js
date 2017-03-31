var TREVOR = 'nope';

function draw() {
    console.log("running draw");
    var canvas = $('#canv');

    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.fillStyle='rgb(200,0,0)';
        ctx.fillRect(10,10,50,50);
    }
    else {
        console.log("Canvas didn't work");
        var div = $('<div></div>')
                      .addClass('bigtext')
                      .text(TREVOR);
        $('#container').append(div)
    }
}
