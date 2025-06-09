<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\CaseStudy;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // Skip if the table doesn't exist yet
        if (!Schema::hasTable('case_studies')) {
            return;
        }
        
        // Check if the column already exists
        if (Schema::hasColumn('case_studies', 'gallery_images')) {
            return;
        }
        
        Schema::table('case_studies', function (Blueprint $table) {
            $table->json('gallery_images')->nullable()->after('featured_image');
        });

        // Update existing case studies with gallery images
        $caseStudies = CaseStudy::all();
        foreach ($caseStudies as $caseStudy) {
            // Create gallery images array based on the case study
            $galleryImages = [];
            
            if ($caseStudy->slug === 'mobile-banking-app') {
                $galleryImages = [
                    [
                        'src' => 'https://fls-9f1d4e41-ea60-4ed5-afbe-a63d3be91414.r2.cloudflarestorage.com/images/site-images/rob_thomas23_A_Diverse_team_African_American_Happy__Mobile_de_addb40d4-04d4-481e-9072-f29d1dee05d1_1.png',
                        'alt' => 'Mobile banking app development team'
                    ],
                    [
                        'src' => 'https://fls-9f1d4e41-ea60-4ed5-afbe-a63d3be91414.r2.cloudflarestorage.com/images/site-images/rob_thomas23_A_Diverse_team_African_American_Happy__Mobile_de_addb40d4-04d4-481e-9072-f29d1dee05d1_3 (1).png',
                        'alt' => 'Mobile banking app user interface'
                    ],
                    [
                        'src' => 'https://fls-9f1d4e41-ea60-4ed5-afbe-a63d3be91414.r2.cloudflarestorage.com/images/site-images/rob_thomas23_A_Diverse_team_African_American_Happy__Mobile_de_addb40d4-04d4-481e-9072-f29d1dee05d1_3 (2).png',
                        'alt' => 'Mobile banking app testing'
                    ],
                    [
                        'src' => 'https://fls-9f1d4e41-ea60-4ed5-afbe-a63d3be91414.r2.cloudflarestorage.com/images/site-images/rob_thomas23_African_American_mobile_developer_working_on_an__bc48faad-4ec2-47b8-bd41-c0baac19a857_2.png',
                        'alt' => 'Mobile banking app development'
                    ]
                ];
            } elseif ($caseStudy->slug === 'ecommerce-platform-redesign') {
                $galleryImages = [
                    [
                        'src' => 'https://fls-9f1d4e41-ea60-4ed5-afbe-a63d3be91414.r2.cloudflarestorage.com/images/site-images/rob_thomas23_A_dynamic_image_of_an_ecommerce_website_on_a_lapto_8573ee70-5ea2-48aa-ae70-35db662a51f2.png',
                        'alt' => 'E-commerce platform on laptop'
                    ],
                    [
                        'src' => 'https://fls-9f1d4e41-ea60-4ed5-afbe-a63d3be91414.r2.cloudflarestorage.com/images/site-images/rob_thomas23_A_Diverse_team_African_American_white_men_and_wo_4d54bb42-096c-4b7b-ae8e-cee40c231aac_0.png',
                        'alt' => 'E-commerce development team'
                    ],
                    [
                        'src' => 'https://fls-9f1d4e41-ea60-4ed5-afbe-a63d3be91414.r2.cloudflarestorage.com/images/site-images/rob_thomas23_A_Diverse_team_African_American_white_men_and_wo_4d54bb42-096c-4b7b-ae8e-cee40c231aac_3.png',
                        'alt' => 'E-commerce platform design review'
                    ],
                    [
                        'src' => 'https://fls-9f1d4e41-ea60-4ed5-afbe-a63d3be91414.r2.cloudflarestorage.com/images/site-images/rob_thomas23_A_Diverse_team_African_American_white_men_and_wo_4d54bb42-096c-4b7b-ae8e-cee40c231aac_3 (1).png',
                        'alt' => 'E-commerce platform mobile view'
                    ]
                ];
            } elseif ($caseStudy->slug === 'healthcare-management-system') {
                $galleryImages = [
                    [
                        'src' => 'https://fls-9f1d4e41-ea60-4ed5-afbe-a63d3be91414.r2.cloudflarestorage.com/images/site-images/rob_thomas23_African_American_developers_testing_an_app_on_a__8ce29719-300c-433f-b269-b04a31ca9ff7_0.png',
                        'alt' => 'Healthcare management system testing'
                    ],
                    [
                        'src' => 'https://fls-9f1d4e41-ea60-4ed5-afbe-a63d3be91414.r2.cloudflarestorage.com/images/site-images/rob_thomas23_A_Diverse_team_African_American_white_men_and_wo_36e520ed-8877-46b5-8416-655e4dae40c8_0.png',
                        'alt' => 'Healthcare system development team'
                    ],
                    [
                        'src' => 'https://fls-9f1d4e41-ea60-4ed5-afbe-a63d3be91414.r2.cloudflarestorage.com/images/site-images/rob_thomas23_A_Diverse_team_African_American_white_men_and_wo_36e520ed-8877-46b5-8416-655e4dae40c8_1.png',
                        'alt' => 'Healthcare system user interface'
                    ],
                    [
                        'src' => 'https://fls-9f1d4e41-ea60-4ed5-afbe-a63d3be91414.r2.cloudflarestorage.com/images/site-images/rob_thomas23_A_Diverse_team_African_American_white_men_and_wo_36e520ed-8877-46b5-8416-655e4dae40c8_2.png',
                        'alt' => 'Healthcare system implementation'
                    ]
                ];
            }
            
            // Update the case study with gallery images
            $caseStudy->gallery_images = json_encode($galleryImages);
            $caseStudy->save();
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('case_studies', function (Blueprint $table) {
            $table->dropColumn('gallery_images');
        });
    }
};
