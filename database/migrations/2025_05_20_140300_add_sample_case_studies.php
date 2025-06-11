<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;
use App\Models\CaseStudy;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // Check if the case_studies table exists
        if (!Schema::hasTable('case_studies')) {
            // Create the case_studies table first
            Schema::create('case_studies', function (Blueprint $table) {
                $table->id();
                $table->string('title');
                $table->string('slug')->unique();
                $table->string('client_name');
                $table->string('industry');
                $table->string('service_type');
                $table->text('challenge');
                $table->text('solution');
                $table->text('results');
                $table->text('testimonial')->nullable();
                $table->string('testimonial_author')->nullable();
                $table->string('testimonial_position')->nullable();
                $table->string('featured_image');
                $table->string('logo')->nullable();
                $table->string('website_url')->nullable();
                $table->date('completion_date')->nullable();
                $table->boolean('is_featured')->default(false);
                $table->string('meta_title')->nullable();
                $table->text('meta_description')->nullable();
                $table->string('status')->default('draft'); // draft, published
                $table->timestamps();
            });
        }
        
        // Only create sample case studies in non-production environments
        if (!app()->environment('production')) {
            // Create sample case studies
            $sampleCaseStudies = [
            [
                'title' => 'Mobile Banking App Development',
                'slug' => 'mobile-banking-app',
                'client_name' => 'SecureFinance',
                'industry' => 'Finance',
                'service_type' => 'Mobile Development',
                'challenge' => '<p>SecureFinance needed a modern, secure mobile banking application that would allow their customers to perform all banking operations from their mobile devices. The existing system was outdated and lacked important security features.</p>',
                'solution' => '<p>We developed a comprehensive mobile banking application using React Native for cross-platform compatibility. The app includes secure authentication with biometric options, real-time transaction monitoring, and a user-friendly interface designed for optimal user experience.</p>',
                'results' => '<p>The new mobile banking app has seen a 45% increase in mobile banking usage among SecureFinance customers. Customer satisfaction ratings increased by 35%, and the app has maintained a 4.8/5 rating in app stores.</p>',
                'testimonial' => '<p>The mobile banking app developed by Empuls3 has revolutionized how our customers interact with our services. The intuitive interface and robust security features have received overwhelmingly positive feedback from our users.</p>',
                'testimonial_author' => 'Alisha Williams',
                'testimonial_position' => 'CTO, SecureFinance',
                'featured_image' => 'images/site-images/rob_thomas23_African_American_mobile_developer_working_on_an__bc48faad-4ec2-47b8-bd41-c0baac19a857_2.png',
                'website_url' => 'https://securefinance.example.com',
                'completion_date' => '2024-11-15',
                'status' => 'published',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'E-commerce Platform Redesign',
                'slug' => 'ecommerce-platform-redesign',
                'client_name' => 'RetailTech Solutions',
                'industry' => 'E-commerce',
                'service_type' => 'Web Development',
                'challenge' => '<p>RetailTech Solutions was struggling with an outdated e-commerce platform that had poor conversion rates and was difficult to manage. They needed a modern solution that would improve user experience and increase sales.</p>',
                'solution' => '<p>We completely redesigned their e-commerce platform with a focus on user experience, mobile responsiveness, and performance optimization. The new platform includes advanced product filtering, personalized recommendations, and a streamlined checkout process.</p>',
                'results' => '<p>After launching the redesigned platform, RetailTech Solutions saw a 35% increase in conversion rates, a 28% decrease in cart abandonment, and a 40% increase in mobile sales within the first three months.</p>',
                'testimonial' => '<p>Empuls3 transformed our outdated e-commerce platform into a modern, user-friendly site that\'s increased our conversion rates by 35%. Their team was professional, responsive, and delivered exactly what we needed on time and within budget.</p>',
                'testimonial_author' => 'Marcus Johnson',
                'testimonial_position' => 'CEO, RetailTech Solutions',
                'featured_image' => 'images/site-images/rob_thomas23_A_dynamic_image_of_an_ecommerce_website_on_a_lapto_8573ee70-5ea2-48aa-ae70-35db662a51f2.png',
                'website_url' => 'https://retailtech.example.com',
                'completion_date' => '2024-09-30',
                'status' => 'published',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Healthcare Management System',
                'slug' => 'healthcare-management-system',
                'client_name' => 'MedCare Innovations',
                'industry' => 'Healthcare',
                'service_type' => 'Software Development',
                'challenge' => '<p>MedCare Innovations needed a comprehensive healthcare management system to streamline patient care, improve record-keeping, and enhance communication between healthcare providers.</p>',
                'solution' => '<p>We developed a custom healthcare management system with electronic health records, appointment scheduling, secure messaging, and analytics dashboards. The system was built with HIPAA compliance as a priority.</p>',
                'results' => '<p>The new system reduced administrative time by 30%, improved patient satisfaction scores by 25%, and enabled healthcare providers to see 15% more patients due to improved efficiency.</p>',
                'testimonial' => '<p>Working with Empuls3 on our healthcare management system was a game-changer for our organization. Their team took the time to understand our complex requirements and delivered a solution that has streamlined our operations and improved patient care.</p>',
                'testimonial_author' => 'Dr. Terrence Mitchell',
                'testimonial_position' => 'Director of IT, MedCare Innovations',
                'featured_image' => 'images/site-images/rob_thomas23_African_American_developers_testing_an_app_on_a__8ce29719-300c-433f-b269-b04a31ca9ff7_0.png',
                'website_url' => 'https://medcare-innovations.example.com',
                'completion_date' => '2025-01-20',
                'status' => 'published',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

            foreach ($sampleCaseStudies as $caseStudy) {
                CaseStudy::create($caseStudy);
            }
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // Remove sample case studies
        CaseStudy::where('slug', 'mobile-banking-app')->delete();
        CaseStudy::where('slug', 'ecommerce-platform-redesign')->delete();
        CaseStudy::where('slug', 'healthcare-management-system')->delete();
    }
};
