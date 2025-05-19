import React, { useEffect } from 'react';

type HomeComponentWrapperProps = {
  children: React.ReactNode;
};

export function HomeComponentWrapper({ children }: HomeComponentWrapperProps) {
  useEffect(() => {
    // Add border to all images and remove shadows
    const addBordersRemoveShadows = () => {
      // Target all images in the home components
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        // Add border class if it doesn't have one
        if (!img.classList.contains('border')) {
          img.classList.add('border', 'border-gray-200');
        }
      });

      // Remove shadows from cards
      const cards = document.querySelectorAll('.shadow-sm, .shadow, .shadow-md, .shadow-lg');
      cards.forEach(card => {
        card.classList.remove('shadow-sm', 'shadow', 'shadow-md', 'shadow-lg');
      });
    };

    // Run once on mount
    addBordersRemoveShadows();

    // Also run after a short delay to catch any dynamically loaded content
    const timer = setTimeout(addBordersRemoveShadows, 500);

    return () => clearTimeout(timer);
  }, []);

  return <>{children}</>;
}
