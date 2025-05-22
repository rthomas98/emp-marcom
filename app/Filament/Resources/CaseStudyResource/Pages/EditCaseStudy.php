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
        // Fix URLs for file uploads to use the correct domain
        if (isset($data['featured_image'])) {
            $data['featured_image'] = $this->fixFileUrl($data['featured_image']);
        }
        
        if (isset($data['logo'])) {
            $data['logo'] = $this->fixFileUrl($data['logo']);
        }
        
        if (isset($data['gallery_images']) && is_array($data['gallery_images'])) {
            foreach ($data['gallery_images'] as $key => $image) {
                if (isset($image['src'])) {
                    $data['gallery_images'][$key]['src'] = $this->fixFileUrl($image['src']);
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
