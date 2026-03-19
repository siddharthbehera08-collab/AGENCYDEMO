import React from 'react';

const logos = [
  { id: 1, name: "Google", src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { id: 2, name: "Amazon", src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { id: 3, name: "Netflix", src: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
  { id: 4, name: "Meta", src: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
  { id: 5, name: "Microsoft", src: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
  { id: 6, name: "Apple", src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
  { id: 7, name: "Spotify", src: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg" },
  { id: 8, name: "Adobe", src: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo_and_wordmark.svg" }
];

export default function LogoCarousel() {
  // Duplicate the array to create seamless infinite loop visually
  const allLogos = [...logos, ...logos];

  return (
    <section className="py-16 bg-white overflow-hidden border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <h2 className="text-center text-sm font-semibold uppercase tracking-wider text-gray-500">
          Trusted by Innovative Companies
        </h2>
      </div>

      {/* Outer container: overflow-hidden hides scrollbar track normally, changes to auto on hover */}
      <div className="w-full overflow-hidden hover:overflow-x-auto group cursor-grab active:cursor-grabbing no-scrollbar">
        {/* Inner track: Flex row, w-max, runs CSS animation, pauses on hover */}
        {/* We use pr-16 here to perfectly balance gap-16 when shifting by -50% */}
        <div className="flex items-center gap-16 pr-16 w-max animate-scroll group-hover:[animation-play-state:paused] will-change-transform px-8 pb-4">
          {allLogos.map((logo, index) => (
            <div 
              key={`${logo.id}-${index}`} 
              className="flex-shrink-0 flex items-center justify-center min-w-[120px] transition-all duration-300 transform opacity-60 hover:opacity-100 hover:scale-110"
            >
              <img 
                src={logo.src} 
                alt={`${logo.name} logo`} 
                className="h-8 sm:h-10 md:h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-opacity duration-300"
                draggable="false"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
