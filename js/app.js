/*
    Script for index.html

    See the README.md file for instructions
    https://github.com/drstearns/canvas-lab/blob/master/README.md
*/

document.addEventListener('DOMContentLoaded', function() {
    'use strict';
    var canvas = document.querySelector("canvas");
    var ctx = canvas.getContext('2d');
    var mouseIsDown = false;
    var colorInp = document.querySelector('#line-color-inp');

    canvas.addEventListener('mousedown', function(evt) {
        mouseIsDown = true;
        ctx.beginPath();
        ctx.moveTo(evt.clientX - canvas.offsetLeft, evt.clientY - canvas.offsetTop);
    });

    canvas.addEventListener('mousemove', function(evt) {
        if (mouseIsDown) {
            ctx.lineTo(evt.clientX - canvas.offsetLeft, evt.clientY - canvas.offsetTop);
            ctx.stroke();
        }
    });

    canvas.addEventListener('mouseup', function(evt) {
        mouseIsDown = false;
        ctx.lineTo(evt.clientX - canvas.offsetLeft, evt.clientY - canvas.offsetTop);
        ctx.stroke();
    });

    colorInp.addEventListener('change', function(evt) {
        ctx.strokeStyle = colorInp.value;
    })

}); //DOMContentLoaded
