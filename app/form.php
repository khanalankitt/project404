<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "akhanal749@gmail.com";
    $subject = "New Form Submission";
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $emailBody = "Name: $name\n";
    $emailBody .= "Email: $email\n\n";
    $emailBody .= "Message:\n$message";

    $headers = "From: $email";

    mail($to, $subject, $emailBody, $headers);
}
?>
