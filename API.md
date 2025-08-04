# Empuls3 API Documentation

## Overview

The Empuls3 API provides endpoints for interacting with the application's core features, including contact form submissions and case study management.

## Base URL

```
Production: https://empuls3.com
Development: http://localhost:8000
```

## Authentication

Currently, the public API endpoints do not require authentication. Administrative endpoints are protected by Laravel's authentication system and Filament.

## Rate Limiting

The API implements rate limiting to prevent abuse:
- Contact form: 3 requests per hour per IP/email combination
- General API: 60 requests per minute per IP

## Endpoints

### Contact Form

#### Submit Contact Form

Submit a contact form inquiry.

**Endpoint:** `POST /contact/submit`

**Headers:**
```
Content-Type: application/json
X-Requested-With: XMLHttpRequest
X-CSRF-TOKEN: {csrf_token}
```

**Request Body:**
```json
{
  "name": "string (required)",
  "email": "string (required, valid email)",
  "phone": "string (optional)",
  "company": "string (optional)",
  "message": "string (optional, max 5000 chars)",
  "projectType": "string (required)",
  "projectDescription": "string (optional, max 5000 chars)",
  "requirements": "string (optional, max 5000 chars)",
  "budget": "string (optional)",
  "timeline": "string (optional)",
  "submit_time": "number (optional, unix timestamp)"
}
```

**Project Types:**
- `web-development`
- `mobile-development`
- `custom-software`
- `e-commerce`
- `api-development`
- `ui-ux-design`
- `consulting`
- `other`

**Response - Success (200):**
```json
{
  "success": true,
  "message": "Thank you for your message. We'll get back to you soon!"
}
```

**Response - Validation Error (422):**
```json
{
  "success": false,
  "errors": {
    "name": ["The name field is required."],
    "email": ["The email must be a valid email address."]
  }
}
```

**Response - Rate Limited (429):**
```json
{
  "success": false,
  "message": "Too many contact form submissions. Please try again later.",
  "retry_after": 3600
}
```

**Headers:**
- `X-RateLimit-Limit`: Maximum attempts allowed
- `X-RateLimit-Remaining`: Remaining attempts
- `Retry-After`: Seconds until next attempt allowed (only on 429 response)

### CSRF Token

#### Get CSRF Token

Retrieve a CSRF token for form submissions.

**Endpoint:** `GET /csrf-token`

**Response (200):**
```json
{
  "token": "string"
}
```

### Case Studies

#### List Case Studies

Get a list of published case studies.

**Endpoint:** `GET /case-studies`

**Response:** Inertia.js page component with case studies data

#### Filter Case Studies

Filter case studies by various criteria.

**Endpoint:** `GET /case-studies/filter`

**Query Parameters:**
- `service_type` (optional): Filter by service type
- `industry` (optional): Filter by industry
- `is_featured` (optional): Filter featured case studies (true/false)

**Response (200):**
```json
{
  "data": [
    {
      "id": 1,
      "title": "E-commerce Platform Redesign",
      "slug": "e-commerce-platform-redesign",
      "client_name": "Tech Corp",
      "industry": "Technology",
      "service_type": "web-development",
      "featured_image": "/storage/images/case-study-1.jpg",
      "excerpt": "Brief description...",
      "completion_date": "2024-01-15",
      "is_featured": true
    }
  ],
  "meta": {
    "total": 10,
    "count": 10
  }
}
```

#### Get Single Case Study

Retrieve details of a specific case study.

**Endpoint:** `GET /case-studies/{slug}`

**Response:** Inertia.js page component with case study details and related case studies

## Error Responses

All endpoints may return the following error responses:

### 404 Not Found
```json
{
  "message": "Not found"
}
```

### 500 Internal Server Error
```json
{
  "success": false,
  "message": "An error occurred. Please try again later."
}
```

## Security Headers

All API responses include the following security headers in production:
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Content-Security-Policy: [policy]`

## Bot Protection

The contact form includes bot protection measures:
1. **Honeypot Field**: Include a hidden `website` field that should remain empty
2. **Timing Check**: The `submit_time` field helps detect automated submissions

## Example Implementation

### JavaScript/Fetch

```javascript
// Get CSRF token
const tokenResponse = await fetch('/csrf-token');
const { token } = await tokenResponse.json();

// Submit contact form
const formData = {
  name: 'John Doe',
  email: 'john@example.com',
  projectType: 'web-development',
  message: 'I need help with my website',
  submit_time: Math.floor(Date.now() / 1000) - 10
};

const response = await fetch('/contact/submit', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    'X-CSRF-TOKEN': token
  },
  body: JSON.stringify(formData)
});

const result = await response.json();
```

### PHP/cURL

```php
// Get CSRF token
$ch = curl_init('https://empuls3.com/csrf-token');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
$token = json_decode($response)->token;
curl_close($ch);

// Submit contact form
$data = [
    'name' => 'John Doe',
    'email' => 'john@example.com',
    'projectType' => 'web-development',
    'message' => 'I need help with my website',
    'submit_time' => time() - 10
];

$ch = curl_init('https://empuls3.com/contact/submit');
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json',
    'X-Requested-With: XMLHttpRequest',
    'X-CSRF-TOKEN: ' . $token
]);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
$result = json_decode($response);
curl_close($ch);
```

## Webhook Support

Currently, the API does not support webhooks. All interactions are synchronous request/response.

## Versioning

The API is currently at version 1.0 and does not use versioning in URLs. Breaking changes will be announced in advance.

## Support

For API support or questions, please contact:
- Email: info@empuls3.com
- Website: https://empuls3.com/contact