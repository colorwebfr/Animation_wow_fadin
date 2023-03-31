/*---------------------------------------------------------------
Anime any element inn viewport
-----------------------------------------------------------------*/
function animeInViewport() {
    $(document).ready(function () {
        const width_Screen = parseInt($(window).width());
        if (width_Screen > 1024) {
            //event scroll
            if ($('body').find('wow')) {
                $(window).scroll(function () {
                    let scrollY = parseInt($(window).scrollTop());
                    //each elements to animate
                    $.each($('.wow'), function () {
                        let wow = parseInt($(this).offset().top);
                        //Appear elements
                        if (scrollY > wow - 600) {
                            switch (true) {
                                case $(this).hasClass('fadeInUp'):
                                    $(this).css({'opacity': '1', 'transform': 'translateY(0)' });
                                    console.log('fadeInUp');
                                    break;
                                case $(this).hasClass('fadeInDown'):
                                    $(this).css({ 'opacity': '1', 'transform': 'translateY(0)' });
                                    console.log('fadeInDown');
                                    break;
                                case $(this).hasClass('fadeInLeft'):
                                    $(this).css({ 'opacity': '1', 'transform': 'translateX(0)' });
                                    console.log('fadeInLeft');
                                    break;
                                case $(this).hasClass('fadeInRight'):
                                    $(this).css({ 'opacity': '1', 'transform': 'translateX(0)' });
                                    console.log('fadeInRight');
                                    break;
                                case $(this).hasClass('fadeIn'):
                                    $(this).css({ 'opacity': '1'});
                                    console.log('fadeIn');
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
