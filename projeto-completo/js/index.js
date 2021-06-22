function scrollSuave(seletor) {

    $(seletor).click(function(event) {
        event.preventDefault();
        var target = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000)
    });
}

scrollSuave('a[href*=sobre]');
scrollSuave('a[href*=palestrante]');
scrollSuave('a[href*=form]');