<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up(): void
    {
        DB::table('case_studies')
            ->where('slug', 'solushiens-modern-website-redesign')
            ->update([
                'logo' => 'case-studies/logos/01JVSY8R77H42E5GNGBMWVR3FX.png',
            ]);

        DB::table('case_studies')
            ->where('slug', 'codegig-strategic-pivot-new-website-for-new-audiences')
            ->update([
                'logo' => 'case-studies/logos/01JVW8TPWWH45GB1P3JYQQA7A6.svg',
            ]);
    }

    public function down(): void
    {
        DB::table('case_studies')
            ->where('slug', 'solushiens-modern-website-redesign')
            ->update([
                'logo' => 'case-studies/logos/logo.png',
            ]);

        DB::table('case_studies')
            ->where('slug', 'codegig-strategic-pivot-new-website-for-new-audiences')
            ->update([
                'logo' => 'case-studies/logos/codegig-logo.svg',
            ]);
    }
};
