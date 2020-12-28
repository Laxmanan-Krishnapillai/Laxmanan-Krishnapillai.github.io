<?php
if( isset($_POST['name']) && isset($_POST['email']) && isset($_POST['subject']) && isset($_POST['message']) ){
	$name = $_POST['name']; // HINT: use preg_replace() to filter the data
	$email = $_POST['email'];
	$message = nl2br($_POST['message']);
	$to = "laxmanan.bales@gmail.com";	
	$from = $email;
	$subject = subject;
	$message = '<b>Navn:</b> '.$name.' <br><b>Email:</b> '.$email.' <p>'.$message.'</p>';
	$headers = "From: $from\n";
	$headers .= "MIME-Version: 1.0\n";
	$headers .= "Content-type: text/html; charset=iso-8859-1\n";
	if( mail($to, $subject, $message, $headers) ){
		echo "success";
	} else {
		echo "responsecode 404";
	}
}
?>