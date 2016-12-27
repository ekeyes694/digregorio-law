<?php
if (empty($_POST) === false) {
    $errors = array();

    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    if (empty($name) === true || empty($email) === true || empty($phone) === true || empty($message) === true) {
        $errors[] = 'Name, E-mail, Phone, and Message required!';
    }
    else {
        if (filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
            $errors[] = 'That\'s not a valid e-mail address';
        }
        if (ctype_alpha($name) === false) {
            $errors[] = 'Name must only contain letters';
        }
        if (filter_var($phone, FILTER_VALUE_INT) === false) {
            $errors[] = 'Phone number must only be numbers';
        }
    }

    if (empty($errors) === true) {
        mail('sportsfiend06@aol.com', 'Contact form', $message, 'From: ' . $email);
        header('Location: contact.html?sent');
        exit();
    }
}
?>
