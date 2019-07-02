<?php

    if (isset($_POST['email'])) {

        // Add Email Information

        $admin_email = "YOUR_EMAIL_ADDRESS_HERE";
        
        // Defining variables to store form inputs
        $name = $_POST['name'];
        $email = $_POST['email'];
        $phoneNumber = $_POST['phone'];
        $message = $_POST['message'];
        
        // sending an email to admin
        mail($admin_email, "New Inquiry", $message . ' - ' . $phone, "From: " . $email);
    }