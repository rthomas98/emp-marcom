<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Remove outcome language that is not supported by approved measurements.
     */
    public function up(): void
    {
        // These records were development-only placeholders with invented clients,
        // testimonials, and performance figures. Remove them in every environment
        // so previews and fresh installs cannot present them as published work.
        DB::table('case_studies')
            ->whereIn('slug', [
                'mobile-banking-app',
                'ecommerce-platform-redesign',
                'healthcare-management-system',
            ])
            ->delete();

        DB::table('case_studies')
            ->where('slug', 'hebert-thomas-law-website-refresh')
            ->update([
                'results' => '<p>The delivered outcome was a responsive WordPress website with updated information architecture, service presentation, and calls to action. Empuls3 has not received client-approved traffic or lead measurements for publication, so no quantitative performance outcome is claimed here.</p>',
                'meta_title' => 'Hebert Thomas Law Website Refresh | Empuls3',
                'meta_description' => 'Review the approved scope and delivered website modernization work for Hebert Thomas Law.',
            ]);

        DB::table('case_studies')
            ->where('slug', 'solushiens-modern-website-redesign')
            ->update([
                'results' => '<p>The delivered outcome was a redesigned responsive website with updated navigation, visual presentation, and service content. Empuls3 has not received client-approved engagement, bounce-rate, or lead measurements for publication, so no quantitative performance outcome is claimed here.</p>',
                'meta_title' => 'Solushiens Website Redesign | Empuls3',
                'meta_description' => 'Review the approved scope and delivered website redesign work for Solushiens.',
            ]);

        DB::table('case_studies')
            ->where('slug', 'codegig-strategic-pivot-new-website-for-new-audiences')
            ->update([
                'results' => '<p>The delivered outcome was a new website, message structure, and service architecture aligned to CodeGig’s AI and machine-learning positioning. Empuls3 has not received client-approved inquiry or growth measurements for publication, so no quantitative performance outcome is claimed here.</p>',
                'meta_title' => 'CodeGig Website Repositioning | Empuls3',
                'meta_description' => 'Review the approved scope and delivered website repositioning work for CodeGig.',
            ]);
    }

    /**
     * Restore the previously published copy if this migration is rolled back.
     */
    public function down(): void
    {
        DB::table('case_studies')
            ->where('slug', 'hebert-thomas-law-website-refresh')
            ->update([
                'results' => "The refreshed website has significantly modernized Hebert Thomas Law's online image, leading to improved user engagement and a stronger digital footprint. The clear presentation of services and calls-to-action are poised to increase client inquiries.",
            ]);

        DB::table('case_studies')
            ->where('slug', 'solushiens-modern-website-redesign')
            ->update([
                'results' => "The redesigned website significantly improved user engagement, with increased time on site and reduced bounce rates. The modern design better reflects Solushiens' professional image and has helped attract new clients through an improved online presence.",
            ]);

        DB::table('case_studies')
            ->where('slug', 'codegig-strategic-pivot-new-website-for-new-audiences')
            ->update([
                'results' => '<p>The new CodeGig.co launched as a cornerstone for the brand’s new direction.</p>',
            ]);
    }
};
