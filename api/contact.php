<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    if (!empty($_POST['honeypot'])) {
        echo json_encode([
            'status' => 'error',
            'message' => 'Spam detected.'
        ]);
        exit;
    }

    $name = htmlspecialchars(strip_tags(trim($_POST['name'] ?? '')));
    $email = filter_var(trim($_POST['email'] ?? ''), FILTER_SANITIZE_EMAIL);
    $subject = htmlspecialchars(strip_tags(trim($_POST['subject'] ?? '')));
    $message = htmlspecialchars(strip_tags(trim($_POST['message'] ?? '')));

    if (empty($name) || empty($email) || empty($subject) || empty($message)) {
        echo json_encode([
            'status' => 'error',
            'message' => 'All fields are required.'
        ]);
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode([
            'status' => 'error',
            'message' => 'Invalid email format.'
        ]);
        exit;
    }

    $to = "nosaclp4@gmail.com";
    $email_subject = "Portfolio: $subject";

    $email_body = "Name: $name\n" .
        "Email: $email\n" .
        "Message:\n$message";

    $headers = "From: noreply@portofolio.com\n";
    $headers .= "Reply-To: $email";

    if (mail($to, $email_subject, $email_body, $headers)) {
        echo json_encode([
            'status' => 'success',
            'message' => 'Message sent successfully!'
        ]);
    } else {
        echo json_encode([
            'status' => 'error',
            'message' => 'Failed to send on localhost without SMTP.'
        ]);
    }
}
