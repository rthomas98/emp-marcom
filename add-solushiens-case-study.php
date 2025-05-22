<?php

use App\Models\CaseStudy;
use Illuminate\Support\Facades\Artisan;

// Create the storage directory if it doesn't exist
if (!file_exists(public_path('storage/case-studies/solushiens'))) {
    mkdir(public_path('storage/case-studies/solushiens'), 0755, true);
}

// Create the case study
$caseStudy = new CaseStudy();
$caseStudy->title = 'Solushiens - Modern Website Redesign';
$caseStudy->client_name = 'Solushiens';
$caseStudy->industry = 'Professional Services';
$caseStudy->service_type = 'Web Development';
$caseStudy->challenge = 'Solushiens had an outdated WordPress website that didn\'t reflect their modern, professional image. They needed a fresh, contemporary design that would better represent their brand and improve user experience.';
$caseStudy->solution = 'We redesigned their website with a clean, modern aesthetic using contemporary design principles. The new site features improved navigation, responsive design, and a more engaging user interface that highlights their services and expertise.';
$caseStudy->results = 'The redesigned website significantly improved user engagement, with increased time on site and reduced bounce rates. The modern design better reflects Solushiens\' professional image and has helped attract new clients through an improved online presence.';
$caseStudy->testimonial = 'Empuls3 transformed our outdated website into a modern, professional platform that truly represents our brand. Their team was responsive, creative, and delivered exactly what we needed. We\'ve received numerous compliments on the new design, and it\'s already helping us attract new clients.';
$caseStudy->testimonial_author = 'Solushiens Management';
$caseStudy->testimonial_position = 'Leadership Team';
$caseStudy->featured_image = 'case-studies/solushiens/solushiens-featured.jpg';
$caseStudy->logo = 'case-studies/solushiens/solushiens-logo.png';
$caseStudy->website_url = 'https://solushiens.com/';
$caseStudy->completion_date = '2025-01-15';
$caseStudy->is_featured = true;
$caseStudy->meta_title = 'Solushiens Website Redesign Case Study | Empuls3';
$caseStudy->meta_description = 'Learn how Empuls3 transformed Solushiens\' outdated WordPress website into a modern, professional platform that better represents their brand and improves user experience.';
$caseStudy->status = 'published';
$caseStudy->save();

echo "Solushiens case study created successfully with ID: " . $caseStudy->id . PHP_EOL;
