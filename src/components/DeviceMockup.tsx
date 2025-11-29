import { ImageWithFallback } from './figma/ImageWithFallback';

interface DeviceMockupProps {
  src: string;
  alt: string;
  type: 'mobile' | 'desktop';
  className?: string;
}

export function DeviceMockup({ src, alt, type, className = '' }: DeviceMockupProps) {
  if (type === 'mobile') {
    return (
      <div className={`relative mx-auto ${className}`} style={{ maxWidth: '280px' }}>
        {/* Mobile Device Frame */}
        <div className="relative">
          {/* Phone Body */}
          <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl">
            {/* Screen Bezel */}
            <div className="relative bg-black rounded-[2.5rem] overflow-hidden">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-7 bg-gray-900 rounded-b-3xl z-10 flex items-center justify-center gap-2">
                <div className="w-12 h-1 bg-gray-700 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
              </div>
              
              {/* Screen Content */}
              <div className="relative w-full aspect-[9/19.5] overflow-hidden bg-white">
                <ImageWithFallback
                  src={src}
                  alt={alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Power Button */}
            <div className="absolute right-0 top-24 w-1 h-12 bg-gray-700 rounded-l"></div>
            
            {/* Volume Buttons */}
            <div className="absolute left-0 top-20 w-1 h-8 bg-gray-700 rounded-r"></div>
            <div className="absolute left-0 top-32 w-1 h-8 bg-gray-700 rounded-r"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {/* Desktop Device Frame */}
      <div className="relative">
        {/* Monitor */}
        <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-t-2xl p-2 shadow-2xl">
          {/* Top Bar */}
          <div className="absolute top-0 left-0 right-0 h-6 bg-gray-900 rounded-t-2xl flex items-center px-3 gap-1.5">
            <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
            <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full"></div>
            <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
          </div>
          
          {/* Screen */}
          <div className="relative mt-6 bg-white rounded-lg overflow-hidden">
            <div className="w-full aspect-video">
              <ImageWithFallback
                src={src}
                alt={alt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Monitor Stand */}
        <div className="relative flex flex-col items-center">
          {/* Stand Neck */}
          <div className="w-2 h-8 bg-gradient-to-b from-gray-700 to-gray-600"></div>
          {/* Stand Base */}
          <div className="w-32 h-2 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
