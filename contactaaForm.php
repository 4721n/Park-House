<?php 
if (isset($_POST['submit'])) {
    $name = $_POST['firstName'];
    $name = $_POST['lastName'];
    $email = $_POST['emailAddress'];
    $number = $_POST['phoneNumber'];
    $message = $_POST["message"];

    $mailTo = "hello@foursevenmedia.co.uk";
    $headers = "From: ".$email." via hackneywickcreatives.co.uk";
    $txt = "You have a message from ".$name.".\n\n".$message;

    mail($mailTo,$headers,$txt);
    header("Location: index.html?mailsend#contact-id");

}