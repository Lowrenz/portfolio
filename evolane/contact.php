<?php
    # Include the Autoloader (see "Libraries" for install instructions)
    require 'vendor/autoload.php';
    use Mailgun\Mailgun;

    /*if(isset($_POST["submit"]) && isset($_POST["name"]) && isset($_POST["email"]) && isset($_POST["subject"]) && isset($_POST["message"])){*/
        
        # Instantiate the client.
        $mgClient = new Mailgun('key-c6e0f8d6a3e7166a368d408803dbfd2c');
        $domain = "sandboxa202dc53aa5646e9b3b737b978697e40.mailgun.org";

        $email = $_GET["email"];
        $message = $_GET["message"];

        # Make the call to the client.
        $result = $mgClient->sendMessage($domain, array(
            'from'    => $email,
            'to'      => 'Evolane <info@evolane.be>',
            'subject' => "New message from contact form",
            'text'    => $message
        ));

    header("Location: contact.html");
        
    //}
?>