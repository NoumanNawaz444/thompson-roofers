'use client';

import { useState } from 'react';
import { Play } from 'lucide-react';

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-8 px-4 md:px-20 py-12">
      {/* Left Text Content */}
      <div className="flex-1 text-left">
        <p className="text-2xl md:text-3xl font-light leading-relaxed text-gray-800">
          An award-winning team of architects in Berkhamsted led by <br />
          <span className="font-medium">Christian Pinchin</span>, designing dream homes inspired by people and place.
        </p>
      </div>

      {/* Right Video Player */}
      <div className="flex-1 relative w-full max-w-lg">
        {!isPlaying && (
          <div
            className="relative cursor-pointer"
            onClick={() => setIsPlaying(true)}
          >
            <video
              className="rounded-md w-full h-auto object-cover"
              poster="/component-video.jpg" // thumbnail before play
              muted
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/70 p-3 rounded-full transition-transform hover:scale-110">
                <Play className="w-8 h-8 text-gray-800" />
              </div>
            </div>
          </div>
        )}

        {isPlaying && (
          <video
            className="rounded-md w-full h-auto object-cover"
            controls
            autoPlay
          >
            <source src="/sample-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </div>
  );
}
