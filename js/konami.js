"use strict";
let cheat = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13]
let arr = [];
$(document).keyup(function(event){
    console.log(event.keyCode);
    let end = event.keyCode
    arr.push(end)
    if (arr.length === cheat.length) {
        checkCheat()
    }



})
function checkCheat() {
    if (JSON.stringify(cheat) === JSON.stringify(arr)) {
        alert('30 Lives have been added')
        $('body').css('background-image', "url('ac.jpeg')", 'background-size', 'cover', 'background-attachment', 'fixed', 'background-position', 'center', 'background-repeat', 'no-repeat')
        var audio = {};
        audio["walk"] = new Audio();
        audio["walk"].src = "boss-defeat.mp3"
        audio["walk"].play();
        $('body').addClass('back')
        $('h3').addClass('invisible')
    }
}

