/*---------------------------------------------------------------
Anime any element inn viewport
-----------------------------------------------------------------*/
function animeInViewport() {
    $(document).ready(function () {
        const width_Screen = parseInt($(window).width());
        //Only for desktop
        if (width_Screen > 1024) {
            //event scroll
            if ($('body').find('wow')) {
                //El appear on page loading
                $.each($('.wow'), function () {
                    let wow = parseInt($(this).offset().top);
                    //Appear elements
                    if (wow <= 250) {
                        switch (true) {
                            case $(this).hasClass('fadeInUp'):
                                $(this).css({ 'opacity': '1', 'transform': 'translateY(0)' });
                                break;
                            case $(this).hasClass('fadeInDown'):
                                $(this).css({ 'opacity': '1', 'transform': 'translateY(0)' });
                                break;
                            case $(this).hasClass('fadeInLeft'):
                                $(this).css({ 'opacity': '1', 'transform': 'translateX(0)' });
                                break;
                            case $(this).hasClass('fadeInRight'):
                                $(this).css({ 'opacity': '1', 'transform': 'translateX(0)' });
                                break;
                            case $(this).hasClass('fadeIn'):
                                $(this).css({ 'opacity': '1' });
                                break;
                        }
                    }
                });
                // END el appear on page loading
                $(window).scroll(function () {
                    let scrollY = parseInt($(window).scrollTop());
                    //each elements to animate
                    $.each($('.wow'), function () {
                        let wow = parseInt($(this).offset().top);
                        //Appear elements
                        if (scrollY > wow - 600) {
                            switch (true) {
                                case $(this).hasClass('fadeInUp'):
                                    $(this).css({ 'opacity': '1', 'transform': 'translateY(0)' });
                                    break;
                                case $(this).hasClass('fadeInDown'):
                                    $(this).css({ 'opacity': '1', 'transform': 'translateY(0)' });
                                    break;
                                case $(this).hasClass('fadeInLeft'):
                                    $(this).css({ 'opacity': '1', 'transform': 'translateX(0)' });
                                    break;
                                case $(this).hasClass('fadeInRight'):
                                    $(this).css({ 'opacity': '1', 'transform': 'translateX(0)' });
                                    break;
                                case $(this).hasClass('fadeIn'):
                                    $(this).css({ 'opacity': '1' });
                                    break;
                            }
                        }
                    });
                });
            }
        }
    });
}
animeInViewport();
