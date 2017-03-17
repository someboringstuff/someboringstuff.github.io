<?
if (array_key_exists('messageFF', $_POST)) {
   $to = 'store@siteinet.cc.ua';
   $subject = 'Заполнена контактная форма с '.$_SERVER['HTTP_REFERER'];
   $subject = "=?utf-8?b?". base64_encode($subject) ."?=";
   $message = "Имя: ".$_POST['nameFF']."\nEmail: ".$_POST['contactFF']."\nТелефон: ".$_POST['phoneFF']."\nРазмер: ".$_POST['sizeFF'].$_POST['name_of_goods']."\nIP: ".$_SERVER['REMOTE_ADDR']."\nСообщение: ".$_POST['messageFF']."\nSEX: ".$_POST['sex']."\ncolor: ".$_POST['color'];
   $headers = 'Content-type: text/plain; charset="utf-8"';
   $headers .= "MIME-Version: 1.0\r\n";
   $headers .= "Date: ". date('D, d M Y h:i:s O') ."\r\n";
   mail($to, $subject, $message, $headers);
   echo $_POST['nameFF'];
}
?>



