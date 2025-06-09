<?php

/**
 * Script to download sample images for case studies
 * Run with: php download-sample-images.php
 */

// Define the target directory
$targetDir = __DIR__ . '/public/storage/images/site-images';

// Create directory if it doesn't exist
if (!file_exists($targetDir)) {
    mkdir($targetDir, 0755, true);
    echo "Created directory: $targetDir\n";
}

// Sample images from Unsplash (free to use)
$images = [
    'rob_thomas23_A_dynamic_image_of_an_ecommerce_website_on_a_lapto_8573ee70-5ea2-48aa-ae70-35db662a51f2.png' => 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070',
    'rob_thomas23_African_American_mobile_developer_working_on_an__bc48faad-4ec2-47b8-bd41-c0baac19a857_2.png' => 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2076',
    'rob_thomas23_African_American_developers_testing_an_app_on_a__8ce29719-300c-433f-b269-b04a31ca9ff7_0.png' => 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2070',
    'rob_thomas23_African_American_developers_at_an_agency_waterco_31b61ffe-cc01-4adc-81dd-e6e0a1f5674e_1.png' => 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070',
    'rob_thomas23_African_American_developers_working_in_an_agency.__75a77e13-82e4-4da4-aa89-3f854e38c79d.png' => 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070',
    'rob_thomas23_African_American_front-end_developers_development__76be193d-31cc-4dcc-9acf-814ccfe788bb.png' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070',
    'rob_thomas23_African_American_developer_Software_development_te_a1893dc1-71a2-4688-b1dc-e38c62c215f0.png' => 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2070',
    // Gallery images
    'rob_thomas23_A_Diverse_team_African_American_Happy__Mobile_de_addb40d4-04d4-481e-9072-f29d1dee05d1_1.png' => 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070',
    'rob_thomas23_A_Diverse_team_African_American_Happy__Mobile_de_addb40d4-04d4-481e-9072-f29d1dee05d1_3 (1).png' => 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2076',
    'rob_thomas23_A_Diverse_team_African_American_Happy__Mobile_de_addb40d4-04d4-481e-9072-f29d1dee05d1_3 (2).png' => 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2070',
    'rob_thomas23_A_Diverse_team_African_American_white_men_and_wo_4d54bb42-096c-4b7b-ae8e-cee40c231aac_0.png' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070',
    'rob_thomas23_A_Diverse_team_African_American_white_men_and_wo_4d54bb42-096c-4b7b-ae8e-cee40c231aac_3.png' => 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070',
    'rob_thomas23_A_Diverse_team_African_American_white_men_and_wo_4d54bb42-096c-4b7b-ae8e-cee40c231aac_3 (1).png' => 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070',
    'rob_thomas23_A_Diverse_team_African_American_white_men_and_wo_36e520ed-8877-46b5-8416-655e4dae40c8_0.png' => 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070',
    'rob_thomas23_A_Diverse_team_African_American_white_men_and_wo_36e520ed-8877-46b5-8416-655e4dae40c8_1.png' => 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2070',
    'rob_thomas23_A_Diverse_team_African_American_white_men_and_wo_36e520ed-8877-46b5-8416-655e4dae40c8_2.png' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070',
];

// Also copy to resources directory for development
$resourcesDir = __DIR__ . '/resources/images/site-images';

// Download each image
$successCount = 0;
$failCount = 0;

foreach ($images as $filename => $url) {
    echo "Downloading $filename... ";
    
    try {
        // Get image content
        $imageContent = file_get_contents($url);
        
        if ($imageContent === false) {
            throw new Exception("Failed to download image");
        }
        
        // Save to public directory
        $targetPath = $targetDir . '/' . $filename;
        if (file_put_contents($targetPath, $imageContent)) {
            echo "Saved to public directory. ";
            $successCount++;
        } else {
            echo "Failed to save to public directory. ";
            $failCount++;
        }
        
        // Also save to resources directory
        $resourcePath = $resourcesDir . '/' . $filename;
        if (file_put_contents($resourcePath, $imageContent)) {
            echo "Saved to resources directory.";
        } else {
            echo "Failed to save to resources directory.";
        }
        
        echo "\n";
    } catch (Exception $e) {
        echo "Error: " . $e->getMessage() . "\n";
        $failCount++;
    }
}

echo "\nDownload complete. Successfully downloaded $successCount images. Failed to download $failCount images.\n";
echo "Images saved to:\n";
echo "- $targetDir\n";
echo "- $resourcesDir\n";
