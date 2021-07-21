const header = $('header');

$(window).on('wheel', function (e) {
    var delta = e.originalEvent.deltaY;
    if (delta > 0){ //scroll down
        if (!(header.hasClass('header-hidden'))){
            header.addClass('header-hidden');
        }
    }
    else{ //scroll up
        if (header.hasClass('header-hidden')){
            header.removeClass('header-hidden');
        }
    }
})
