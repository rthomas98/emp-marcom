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
        // Remove sample case studies in production
        if (app()->environment('production')) {
            // Delete the sample case studies by their slugs
            CaseStudy::where('slug', 'mobile-banking-app')->delete();
            CaseStudy::where('slug', 'ecommerce-platform-redesign')->delete();
            CaseStudy::where('slug', 'healthcare-management-system')->delete();
            
            // Log that sample case studies have been removed
            \Log::info('Sample case studies have been removed from production.');
        }
    }

    /**
     * Reverse the migrations.
     * 
     * Note: We don't restore sample data in production when rolling back
     */
    public function down(): void
    {
        // No need to restore sample data in production
    }
};
