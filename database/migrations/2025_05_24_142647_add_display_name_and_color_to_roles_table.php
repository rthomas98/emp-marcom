<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('roles', function (Blueprint $table) {
            $table->string('display_name')->nullable()->after('name');
            $table->string('color')->default('#BD1550')->after('display_name');
        });

        // Update existing roles with display_name
        DB::table('roles')->get()->each(function ($role) {
            DB::table('roles')
                ->where('id', $role->id)
                ->update(['display_name' => ucwords(str_replace('_', ' ', $role->name))]);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('roles', function (Blueprint $table) {
            $table->dropColumn(['display_name', 'color']);
        });
    }
};
