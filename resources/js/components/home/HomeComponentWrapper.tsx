import React, { useEffect } from 'react';

type HomeComponentWrapperProps = {
  children: React.ReactNode;
};

export function HomeComponentWrapper({ children }: HomeComponentWrapperProps) {
  useEffect(() => {
    // Remove shadows from cards and borders from images
    const removeShadowsAndImageBorders = () => {
      // Remove borders from all images
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        // Remove border classes from images
        img.classList.remove('border', 'border-gray-200');
      });

      // Remove shadows from cards
      const cards = document.querySelectorAll('.shadow-sm, .shadow, .shadow-md, .shadow-lg');
      cards.forEach(card => {
        card.classList.remove('shadow-sm', 'shadow', 'shadow-md', 'shadow-lg');
      });
    };

    // Run once on mount
    removeShadowsAndImageBorders();

    // Also run after a short delay to catch any dynamically loaded content
    const timer = setTimeout(removeShadowsAndImageBorders, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <a 
        href="#features" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-md focus:outline-none"
      >
        Skip to main content
      </a>
      {children}
    </>
  );
}
