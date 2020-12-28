<?php
// Functions to filter user inputs
function filterNavn($field){
    // Sanitize user Navn
    $field = filter_var(trim($field), FILTER_SANITIZE_STRING);
    
    // Validate user Navn
    if(filter_var($field, FILTER_VALIDATE_REGEXP, array("options"=>array("regexp"=>"/^[a-zA-Z\s]+$/")))){
        return $field;
    } else{
        return FALSE;
    }
}    
function filterEmail($field){
    // Sanitize e-mail address
    $field = filter_var(trim($field), FILTER_SANITIZE_Email);
    
    // Validate e-mail address
    if(filter_var($field, FILTER_VALIDATE_Email)){
        return $field;
    } else{
        return FALSE;
    }
}
function filterString($field){
    // Sanitize string
    $field = filter_var(trim($field), FILTER_SANITIZE_STRING);
    if(!empty($field)){
        return $field;
    } else{
        return FALSE;
    }
}
 
// Define variables and initialize with empty values
$NavnErr = $EmailErr = $BeskedErr = "";
$Navn = $Email = $Emne = $Besked = "";
 
// Processing form data when form is submitted
if($_SERVER["REQUEST_METHOD"] == "POST"){
 
    // Validate user Navn
    if(empty($_POST["Navn"])){
        $NavnErr = "Please enter your Navn.";
    } else{
        $Navn = filterNavn($_POST["Navn"]);
        if($Navn == FALSE){
            $NavnErr = "Please enter a valid Navn.";
        }
    }
    
    // Validate Email address
    if(empty($_POST["Email"])){
        $EmailErr = "Please enter your Email address.";     
    } else{
        $Email = filterEmail($_POST["Email"]);
        if($Email == FALSE){
            $EmailErr = "Please enter a valid Email address.";
        }
    }
    
    // Validate Besked Emne
    if(empty($_POST["Emne"])){
        $Emne = "";
    } else{
        $Emne = filterString($_POST["Emne"]);
    }
    
    // Validate user comment
    if(empty($_POST["Besked"])){
        $BeskedErr = "Please enter your comment.";     
    } else{
        $Besked = filterString($_POST["Besked"]);
        if($Besked == FALSE){
            $BeskedErr = "Please enter a valid comment.";
        }
    }
    
    // Check input errors before sending Email
    if(empty($NavnErr) && empty($EmailErr) && empty($BeskedErr)){
        // Recipient Email address
        $to = 'webmaster@example.com';
        
        // Create Email headers
        $headers = 'From: '. $Email . "\r\n" .
        'Reply-To: '. $Email . "\r\n" .
        'X-Mailer: PHP/' . phpversion();
        
        // Sending Email
        if(mail($to, $Emne, $Besked, $headers)){
            echo '<p class="success">Your Besked has been sent successfully!</p>';
        } else{
            echo '<p class="error">Unable to send Email. Please try again!</p>';
        }
    }
}
?>