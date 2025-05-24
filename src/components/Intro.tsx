'use client';

import { useState } from 'react';
import { Play } from 'lucide-react';
import Architect from "@/images/architect.jpeg"

export default function Intro() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-8 px-4 md:px-20 py-12">
      {/* Left Text Content */}
      <div className="flex-1 text-left md:max-w-2/4 w-full">
        <p className="text-xl md:text-3xl font-light leading-relaxed text-gray-800">
          An award-winning team of architects in Berkhamsted led by
          <span className="font-medium">Christian Pinchin</span>, designing dream homes inspired by people and place.
        </p>
      </div>

      {/* Right Video Player */}
      <div className="flex-1 relative w-full max-w-lg md:max-w-2/4">
       <img src={Architect.src} alt="Architect" className='w-full'  />
      </div>
    </div>
  );
}
