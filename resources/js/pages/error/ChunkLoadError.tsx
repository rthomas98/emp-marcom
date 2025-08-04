import { Button } from '@/components/ui/button';

export default function ChunkLoadError() {
    const handleReload = () => {
        window.location.reload();
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
            <div className="mx-auto max-w-max">
                <main className="sm:flex">
                    <p className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
                        Oops!
                    </p>
                    <div className="sm:ml-6">
                        <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                                Loading Error
                            </h1>
                            <p className="mt-1 text-base text-gray-500">
                                We're having trouble loading this page. This might be due to a network issue or an outdated browser cache.
                            </p>
                        </div>
                        <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                            <Button
                                onClick={handleReload}
                                className="inline-flex items-center"
                            >
                                Reload Page
                            </Button>
                            <Button
                                variant="outline"
                                onClick={() => window.history.back()}
                                className="inline-flex items-center"
                            >
                                Go Back
                            </Button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}