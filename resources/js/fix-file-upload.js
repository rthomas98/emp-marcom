// Fix for Filament file upload "Failed to fetch" errors
document.addEventListener('DOMContentLoaded', () => {
    // Override fetch to handle file upload errors more gracefully
    const originalFetch = window.fetch;
    
    window.fetch = function(...args) {
        // Check if this is a file upload request
        const isFileUploadRequest = args[0] && 
            typeof args[0] === 'string' && 
            args[0].includes('/livewire/upload-file');
        
        if (isFileUploadRequest) {
            return originalFetch(...args)
                .catch(error => {
                    console.error('File upload fetch error:', error);
                    
                    // Dispatch a custom event that our Livewire component can listen for
                    if (window.Livewire) {
                        window.Livewire.dispatch('file-upload-error', 'There was an error uploading the file');
                    }
                    
                    // Rethrow the error to maintain the original behavior
                    throw error;
                });
        }
        
        // For all other requests, use the original fetch
        return originalFetch(...args);
    };
});
