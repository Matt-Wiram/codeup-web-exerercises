"use strict";




    $('dt').click(function (e) {

        $('dd').toggleClass('invisible');
        $(this).next('dd').toggleClass('yellow')
    });

