import jQuery from 'jquery';
import popper from 'popper.js';
import bootstrap from 'bootstrap';
import 'bootstrap/js/dist/util';


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


jQuery(document).ready(function () {
    jQuery('#btn1_submit').click(function () {
        // собираем данные с формы
        console.log("test");
        var user_name1 = jQuery('#exampleInputName').value;
        var user_email1 = jQuery('#exampleInputTel').value;
        // отправляем данные
        jQuery.ajax({
            url: "action.php", // куда отправляем
            type: "post", // метод передачи
            dataType: "json", // тип передачи данных
            data: { // что отправляем
                "user_name": user_name1,
                "user_email": user_email1
            },
            // после получения ответа сервера
            success: function (data) {
                console.log('Success!');
                jQuery('.toast-body').html(data.result);
                jQuery('.toast').toast('show');
            }
        });
    });
});