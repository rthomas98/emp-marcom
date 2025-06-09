<?php

namespace App\Console\Commands;

use App\Models\User;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;

class CreateFilamentUser extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'filament:create-user {--name= : The name of the user} {--email= : The email of the user} {--password= : The password of the user} {--role= : The role to assign to the user}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create a new Filament admin user';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $name = $this->option('name') ?? $this->ask('Enter the user name');
        $email = $this->option('email') ?? $this->ask('Enter the user email');
        // Get password from option or prompt securely
        $password = $this->option('password');
        if (empty($password)) {
            $password = $this->secret('Enter the user password');
            
            // Validate password strength
            if (strlen($password) < 12) {
                $this->error('Password must be at least 12 characters long.');
                return 1;
            }
        }
        $role = $this->option('role') ?? $this->choice(
            'Select the user role',
            ['admin', 'editor', 'viewer'],
            'admin'
        );

        // Check if user already exists
        $existingUser = User::where('email', $email)->first();
        
        if ($existingUser) {
            if ($this->confirm("User with email {$email} already exists. Do you want to update this user?", true)) {
                $existingUser->name = $name;
                $existingUser->password = Hash::make($password);
                $existingUser->save();
                
                // Sync roles
                $this->assignRole($existingUser, $role);
                
                $this->info("User {$email} has been updated successfully!");
                return;
            } else {
                $this->info('Operation cancelled.');
                return;
            }
        }

        // Create new user
        $user = User::create([
            'name' => $name,
            'email' => $email,
            'password' => Hash::make($password),
        ]);

        // Assign role
        $this->assignRole($user, $role);

        $this->info("Filament user {$email} created successfully!");
        $this->table(
            ['Name', 'Email', 'Role'],
            [[$user->name, $user->email, $role]]
        );
    }

    /**
     * Assign role to user
     */
    protected function assignRole(User $user, string $roleName): void
    {
        // Check if role exists, create if it doesn't
        $role = Role::firstOrCreate(['name' => $roleName]);
        
        // Remove existing roles and assign new one
        $user->syncRoles([$role]);
        
        $this->line("Assigned role '{$roleName}' to user.");
    }
}
