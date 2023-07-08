<?php

if(isset($POST['submit'])){
    $name=$_POST['uname'];
    $email=$_POST['email'];
    $phone=$_POST['phone'];
    $message=$_POST['comment'];
}

$to='sohailqureshi82@gmail.com';
$subject="Form Submission";
$message="Name: "$name."\n" ."wrote the following: " ."\n\n ".$message "\n phone Number: "$phone".";
$headers="From: "$email;
if(mail($to, $subject, $message, $headers)){
    echo "<h1> Sent successful! Thankyou"." ".$name.", we will contact you soon!</h1>";
}
else{
    echo"Something went wrong!";
}

?>