<?php

use App\Models\CaseStudy;

// Get the Solushiens case study
$caseStudy = CaseStudy::where('slug', 'solushiens-modern-website-redesign')->first();

if (!$caseStudy) {
    echo "Case study not found!\n";
    exit;
}

// Define the gallery images
$galleryImages = [
    [
        'src' => 'case-studies/solushiens/solushiens-image1.jpg',
        'alt' => 'Solushiens team working at computers with watercolor effect'
    ],
    [
        'src' => 'case-studies/solushiens/solushiens-image2.jpg',
        'alt' => 'Solushiens team members in a professional setting with watercolor effect'
    ],
    [
        'src' => 'case-studies/solushiens/solushiens-image3.jpg',
        'alt' => 'Solushiens professionals collaborating with watercolor effect'
    ]
];

// Update the case study with gallery images
$caseStudy->gallery_images = $galleryImages;
$caseStudy->save();

echo "Gallery images added to Solushiens case study successfully!\n";
