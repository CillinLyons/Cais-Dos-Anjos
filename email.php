<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <?php

      $errors = [];
      $errorMessage = '';

      if (!empty($_POST)) {
          $name = $_POST['name'];
          $email = $_POST['email'];
          $subject = $_POST['subject'];
          $message = $_POST['message'];

          if (empty($name)) {
              $errors[] = 'Name is empty';
          }

          if (empty($email)) {
              $errors[] = 'Email is empty';
          } else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
              $errors[] = 'Email is invalid';
          }

          if (empty($message)) {
              $errors[] = 'Message is empty';
          }

          if (empty($subject)) {
              $errors[] = 'subject is empty';
          }


          if (empty($errors)) {
              $toEmail = 'cillinlyons@outlook.com';
              $emailSubject = 'New email from your website form';
              $headers = ['From' => $email, 'Subject' => $subject, 'Reply-To' => $email, 'Content-type' => 'text/html; charset=iso-8859-1'];

              $bodyParagraphs = ["Name: {$name}", "Subject: {$subject}", "Email: {$email}", "Message:", $message];
              $body = join('<br>', $bodyParagraphs);

              if (mail($toEmail, $emailSubject, $body, $headers)) {
                  header('Location: https://caisdosanjoshouses.com');
              } else {
                  $errorMessage = 'Oops, something went wrong. Please try again later';
              }
          } else {
              $allErrors = join('<br/>', $errors);
              $errorMessage = "<p style='color: red;'>{$allErrors}</p>";
          }
      }

    ?>
  </body>
</html>