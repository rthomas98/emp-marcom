<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;

class AdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create admin role if it doesn't exist
        $adminRole = Role::firstOrCreate(['name' => 'admin']);
        
        // Admin user details
        $adminUser = [
            'name' => 'Rob Thomas',
            'email' => 'rob.thomas@empuls3.com',
            // Password will be set from .env or default to a secure one
            'password' => Hash::make(env('ADMIN_PASSWORD', 'change-me-immediately')),
        ];
        
        // Create or update the admin user
        $user = User::updateOrCreate(
            ['email' => $adminUser['email']],
            $adminUser
        );
        
        // Assign admin role
        $user->syncRoles([$adminRole]);
        
        $this->command->info('Admin user created/updated successfully.');
        $this->command->info('Email: ' . $adminUser['email']);
        $this->command->warn('If you used the default password, please change it immediately after login!');
    }
}
