<?php
header('Access-Control-Allow-Origin: https://www.lorenzgillisjans.com');
header('Access-Control-Allow-Origin: https://lorenzgillisjans.com');

require '../vendor/autoload.php';
use Mailgun\Mailgun;

// Check for empty fields
if(empty($_POST['name']) || empty($_POST['email']) || empty($_POST['message'])	|| !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL)){
  echo "No arguments Provided!";
  return false;
}
/*
$mgClient = new Mailgun('key-65d7c0de48988c6f9b2f99e88edfd6af');
$domain = "mail.lorenzgillisjans.com";
*/
$mgClient = new Mailgun('key-65d7c0de48988c6f9b2f99e88edfd6af');
$domain = "sandbox0390d502c567401099575f2f2abbcf01.mailgun.org";

$name = $_POST['name'];
$email_address = $_POST['email'];
//$website = $_POST['website'];
$message = $_POST['message'];

// Create the email and send the message
/*$to = 'lorenz.gillisjans@gmail.com';
$email_subject = "Website Contact Form:  $name";
$email_body = "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email_address\n\nWebsite: $website\n\nMessage:\n$message";
$headers = "From: noreply@lorenzgillisjans.com\n";
$headers .= "Reply-To: $email_address";
mail($to,$email_subject,$email_body,$headers);*/

$from = $name." <".$email_address.">";

$result = $mgClient->sendMessage($domain, array(
    'from'    => $from,
    'to'      => 'Lorenz Gillisjans <lorenz.gillisjans@gmail.com>',
    'subject' => 'Website - Contact',
    'text'    => $message
));

  return true;

?>
