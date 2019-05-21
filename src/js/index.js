import jQuery from 'jquery';
import popper from 'popper.js';
import bootstrap from 'bootstrap';

// jQuery(function () {
//     jQuery('body').css('color', 'blue');
// });

jQuery(function () {
    // при нажатии на кнопку scrollup
    jQuery('.scrollup').click(function () {
        // переместиться в верхнюю часть страницы
        jQuery("html, body").animate({
            scrollTop: 0
        }, 1000);
    })
})
// при прокрутке окна (window)
jQuery(window).scroll(function () {
    // если пользователь прокрутил страницу более чем на 200px
    if (jQuery(this).scrollTop() > 200) {
        // то сделать кнопку scrollup видимой
        jQuery('.scrollup').fadeIn();
    }
    // иначе скрыть кнопку scrollup
    else {
        jQuery('.scrollup').fadeOut();
    }
});