"use strict";


$('dd').toggle('false')

    $('dt').click(function (e) {
        $('dd').toggle('false')
        $('dd').toggleClass('invisible');

        $('dd').removeClass('yellow')
        $(this).next('dd').toggleClass('yellow')
    });



        $('.highlight').click(function(){

            if($(this).attr('data-click-state') == 0 || $(this).attr('data-click-state') == undefined) {
                $(this).attr('data-click-state', 1);
                $('h3').each(function(x, y) {

                    $(y).next().children().last().css('background-color', 'yellow')
                })
            }
            else {
                $(this).attr('data-click-state', 0);
                $('h3').each(function(x, y) {

                    $(y).next().children().last().css('background-color', 'white')
                })
            }
        });


    //end
    $('h3').click(function () {
        $(this).next().children().css('font-weight', 'bold')
    })

    $('li').click(function () {
        $(this).parent().children().first().css('color', 'blue')

    })

let div1
    $('#left').click(function () {
        $('.frame').children().each(function (x, y) {

            if (x === 0) {
                div1 = y
            }
            else if (x === 1){
               $(y).insertBefore(div1)
            }

        })
    })

let div2
let div3
$('#right').click(function () {
    $('.frame').children().each(function (x, y) {

        if (x === 1) {
            div2 = y
        }
        else if (x === 2){
            div3 = y
        }

    })
    $(div3).insertBefore(div2)
})

let div4
let div5
let div6
$('#center').click(function () {
    $('.frame').children().each(function (x, y) {
        if (x === 0) {
            div4 = y
        }
        else if (x === 1) {
            div5 = y
        }
        else {
            div6 = y
        }
    })
    let rando = Math.floor(Math.random() * 2);
    if (rando === 1) {
        $(div5).insertBefore(div4)
    }
    else {
        $(div6).insertBefore(div5)
    }
})



