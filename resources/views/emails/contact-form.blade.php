<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>New Contact Form Submission</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background-color: #BD1550;
            color: white;
            padding: 20px;
            text-align: center;
        }
        .content {
            padding: 20px;
            background-color: #f9f9f9;
        }
        .footer {
            text-align: center;
            padding: 10px;
            font-size: 12px;
            color: #666;
        }
        .field {
            margin-bottom: 15px;
        }
        .field-label {
            font-weight: bold;
            color: #1F1946;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>New Contact Form Submission</h1>
        </div>
        <div class="content">
            <p>You have received a new message from the Empuls3 website contact form.</p>
            
            <div class="field">
                <p class="field-label">Name:</p>
                <p>{{ $formData['name'] }}</p>
            </div>
            
            <div class="field">
                <p class="field-label">Email:</p>
                <p>{{ $formData['email'] }}</p>
            </div>
            
            @if(isset($formData['phone']) && $formData['phone'])
            <div class="field">
                <p class="field-label">Phone:</p>
                <p>{{ $formData['phone'] }}</p>
            </div>
            @endif
            
            @if(isset($formData['company']) && $formData['company'])
            <div class="field">
                <p class="field-label">Company:</p>
                <p>{{ $formData['company'] }}</p>
            </div>
            @endif
            
            <div class="field">
                <p class="field-label">Project Type:</p>
                <p>{{ $formData['projectType'] }}</p>
            </div>
            
            @if(isset($formData['projectDescription']) && $formData['projectDescription'])
            <div class="field">
                <p class="field-label">Project Description:</p>
                <p>{{ $formData['projectDescription'] }}</p>
            </div>
            @endif
            
            @if(isset($formData['requirements']) && $formData['requirements'])
            <div class="field">
                <p class="field-label">Requirements:</p>
                <p>{{ $formData['requirements'] }}</p>
            </div>
            @endif
            
            @if(isset($formData['budget']) && $formData['budget'])
            <div class="field">
                <p class="field-label">Budget:</p>
                <p>{{ $formData['budget'] }}</p>
            </div>
            @endif
            
            @if(isset($formData['timeline']) && $formData['timeline'])
            <div class="field">
                <p class="field-label">Timeline:</p>
                <p>{{ $formData['timeline'] }}</p>
            </div>
            @endif
            
            <div class="field">
                <p class="field-label">Message:</p>
                <p>{{ $formData['message'] }}</p>
            </div>
        </div>
        <div class="footer">
            <p>This email was sent from the contact form on the Empuls3 website.</p>
        </div>
    </div>
</body>
</html>
