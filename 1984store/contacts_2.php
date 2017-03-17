<!-- ПОВНА ФОРМА ВІДПРАВКИ ТОВАРУ -->
<?
if (array_key_exists('messageFF', $_POST)) {
   $to = 'inetmagaz1@gmail.com';
   $subject = 'Заполнена контактная форма с '.$_SERVER['HTTP_REFERER'];
   $subject = "=?utf-8?b?". base64_encode($subject) ."?=";
   $message = "Имя: ".$_POST['nameFF']."\nEmail: ".$_POST['contactFF']."\nТелефон: ".$_POST['phoneFF']."\nNAME_OF_GOODS ".$_POST['name_of_goods']."\nРазмер: ".$_POST['sizeFF']."\nIP: ".$_SERVER['REMOTE_ADDR']."\nСообщение: ".$_POST['messageFF']."\nSEX: ".$_POST['sex']."\ncolor: ".$_POST['color'];
   $headers = 'Content-type: text/plain; charset="utf-8"';
   $headers .= "MIME-Version: 1.0\r\n";
   $headers .= "Date: ". date('D, d M Y h:i:s O') ."\r\n";
   mail($to, $subject, $message, $headers);
   echo $_POST['nameFF'];
}
?>



