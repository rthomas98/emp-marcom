import { Head } from '@inertiajs/react';
import { ReactNode } from 'react';
import MainMenu from '@/components/navigation/MainMenu';
import Footer from '@/components/footer/Footer';

interface SiteLayoutProps {
  children: ReactNode;
  title?: string;
}

export default function SiteLayout({ children, title = 'Empuls3' }: SiteLayoutProps) {

  return (
    <div className="flex min-h-screen flex-col bg-white font-body text-foreground">
      <Head title={title} />
      
      {/* Header */}
      <MainMenu />

      {/* Main content */}
      <main className="flex-1 pt-24">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
