    "use strict";

    // $(function that() {
    //
    //     alert ('page has loaded')
    //
    // });

    // $(function alrt() {
    //     let end = $('#para1').html();
    //     alert (end)
    //     let start = $('#para2').html();
    //     alert(start)
    //
    // });
    // $(function shout() {
    //     let group = $('.codeup').css('border', '1px solid red');
    //
    // })
    // $(function change() {
    //     $('li').css('font-size', '20px')
    //     $('h1, li, p').css('background-color', 'yellow')
    //     let shout = $('h1').html()
    //     alert(shout)
    // })

    $('h1').click(function (e) {
        $('h1').css('background-color', 'red')
    })
    $('p').dblclick(function (e) {
    $('p').css('font-size', "18px")
})
    $('li').hover(function () {
    $('li').css('color', 'red')
}, function () {
    $('li').css('color', 'black')
}
    )

