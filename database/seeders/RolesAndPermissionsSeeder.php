<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\PermissionRegistrar;

class RolesAndPermissionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Reset cached roles and permissions
        app()[PermissionRegistrar::class]->forgetCachedPermissions();

        // Create permissions
        // Case Studies permissions
        Permission::create(['name' => 'view case studies']);
        Permission::create(['name' => 'create case studies']);
        Permission::create(['name' => 'edit case studies']);
        Permission::create(['name' => 'delete case studies']);
        
        // User management permissions
        Permission::create(['name' => 'view users']);
        Permission::create(['name' => 'create users']);
        Permission::create(['name' => 'edit users']);
        Permission::create(['name' => 'delete users']);
        
        // Role management permissions
        Permission::create(['name' => 'view roles']);
        Permission::create(['name' => 'create roles']);
        Permission::create(['name' => 'edit roles']);
        Permission::create(['name' => 'delete roles']);

        // Create roles and assign permissions
        $adminRole = Role::create(['name' => 'admin']);
        $adminRole->givePermissionTo(Permission::all());
        
        $editorRole = Role::create(['name' => 'editor']);
        $editorRole->givePermissionTo([
            'view case studies',
            'create case studies',
            'edit case studies'
        ]);
        
        $viewerRole = Role::create(['name' => 'viewer']);
        $viewerRole->givePermissionTo([
            'view case studies'
        ]);

        // Assign admin role to a user (optional - you can uncomment and modify this as needed)
        // $user = \App\Models\User::where('email', 'admin@example.com')->first();
        // if ($user) {
        //     $user->assignRole('admin');
        // }
    }
}
