<?php
    $msg_box = ""; // в этой переменной будем хранить сообщения формы
    $errors = array(); // контейнер для ошибок
    // проверяем корректность полей
    if($_POST['user_name'] == "")    $errors[] = "Поле 'Ваше имя' не заполнено!";
    if($_POST['user_email'] == "")   $errors[] = "Поле 'Ваш e-mail' не заполнено!";
    //if($_POST['text_comment'] == "") $errors[] = "Поле 'Текст сообщения' не заполнено!";
     $name=$_POST['user_name'];
     $email=$_POST['user_email'];
     
     $name=strip_tags($name);
     $email=strip_tags($email);
    // если форма без ошибок
    if(empty($errors)){     
        // собираем данные из формы
        $message  = "Имя пользователя: " . $name. "<br/>";
        $message .= "E-mail пользователя: " . $email . "<br/>";
        //$message .= "Текст письма: " . $_POST['text_comment'];      
        send_mail($message); // отправим письмо
        // выведем сообщение об успехе
        $msg_box = "<span style='color: green;'>Сообщение успешно отправлено!</span>";
    }else{
        // если были ошибки, то выводим их
        $msg_box = "";
        foreach($errors as $one_error){
            $msg_box .= "<span style='color: red;'>$one_error</span><br/>";
        }
    }
 
    // делаем ответ на клиентскую часть в формате JSON
    echo json_encode(array(
        'result' => $msg_box
    ));
     
     
    // функция отправки письма
    function send_mail($message){
        // почта, на которую придет письмо
        $mail_to = "ekam230@gmail.com"; 
        // тема письма
        $subject = "Письмо с обратной связи";
         
        // заголовок письма
        $headers= "MIME-Version: 1.0\r\n";
        $headers .= "Content-type: text/html; charset=utf-8\r\n"; // кодировка письма
        $headers .= "From: Форма с сайта<promo@modern-saratov.ru>\r\n"; // от кого письмо
         
        // отправляем письмо 
        mail($mail_to, $subject, $message, $headers);
    }
     
?>