<?php

namespace App\Filament\Resources\CaseStudyResource\Pages;

use App\Filament\Resources\CaseStudyResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\URL;
use Livewire\Attributes\On;

class EditCaseStudy extends EditRecord
{
    protected static string $resource = CaseStudyResource::class;
    
    public function mount($record): void
    {
        parent::mount($record);
        
        // Ensure directories exist
        Storage::disk('public')->makeDirectory('case-studies/featured');
        Storage::disk('public')->makeDirectory('case-studies/logos');
        Storage::disk('public')->makeDirectory('case-studies/gallery');
    }
    
    protected function mutateFormDataBeforeFill(array $data): array
    {
        // For Filament file uploads, we need to keep the paths as they are
        // The paths should be relative to the storage disk, not full URLs
        
        // For featured_image, ensure it's in the correct format for Filament
        if (isset($data['featured_image'])) {
            $data['featured_image'] = $this->normalizePathForFilament($data['featured_image'], 'case-studies/featured');
        }
        
        // For logo, ensure it's in the correct format for Filament
        if (isset($data['logo'])) {
            $data['logo'] = $this->normalizePathForFilament($data['logo'], 'case-studies/logos');
        }
        
        // For gallery images, ensure each image path is in the correct format
        if (isset($data['gallery_images']) && is_array($data['gallery_images'])) {
            foreach ($data['gallery_images'] as $key => $image) {
                if (isset($image['src'])) {
                    $data['gallery_images'][$key]['src'] = $this->normalizePathForFilament($image['src'], 'case-studies/gallery');
                }
            }
        }
        
        return $data;
    }

    protected function mutateFormDataBeforeSave(array $data): array
    {
        // Process any file uploads before saving
        return $data;
    }
    
    /**
     * Fix file URLs to use the correct domain from APP_URL
     */
    protected function fixFileUrl($path)
    {
        if (empty($path)) {
            return $path;
        }
        
        // If it's already a full URL, return it
        if (filter_var($path, FILTER_VALIDATE_URL)) {
            return $path;
        }
        
        // Otherwise, prepend the APP_URL
        return config('app.url') . '/storage/' . ltrim(str_replace('storage/', '', $path), '/');
    }
    
    /**
     * Normalize file paths for Filament FileUpload component
     * Filament expects paths relative to the disk, not full URLs
     */
    protected function normalizePathForFilament($path, $expectedDirectory)
    {
        if (empty($path)) {
            return null;
        }
        
        // Debug information
        $originalPath = $path;
        
        // If it's already in the expected format (just the filename in the directory), return it
        if (str_contains($path, $expectedDirectory . '/')) {
            return $path;
        }
        
        // If it's a full URL, extract just the filename
        if (filter_var($path, FILTER_VALIDATE_URL)) {
            $pathParts = explode('/', parse_url($path, PHP_URL_PATH));
            $filename = end($pathParts);
            return $expectedDirectory . '/' . $filename;
        }
        
        // If it starts with /storage/, remove that prefix
        if (str_starts_with($path, '/storage/')) {
            $path = substr($path, 9);
        }
        
        // If it starts with storage/, remove that prefix too
        if (str_starts_with($path, 'storage/')) {
            $path = substr($path, 8);
        }
        
        // If it starts with /, remove that prefix
        if (str_starts_with($path, '/')) {
            $path = substr($path, 1);
        }
        
        // If the path doesn't include the expected directory, add it
        if (!str_contains($path, $expectedDirectory . '/')) {
            $pathParts = explode('/', $path);
            $filename = end($pathParts);
            return $expectedDirectory . '/' . $filename;
        }
        
        // Log the path transformation for debugging
        \Illuminate\Support\Facades\Log::info("Image path normalized", [
            'original' => $originalPath,
            'normalized' => $path
        ]);
        
        return $path;
    }
    
    #[On('file-upload-error')]
    public function handleFileUploadError($message)
    {
        $this->notify('error', $message ?? 'There was an error uploading the file');
    }

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
