import React from 'react';

const FixedVideoBackground = () => {
  return (
    <div className="fixed inset-0 z-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="/videos/dither-bg.webm" type="video/webm" />
      </video>
      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-white/20" />
    </div>
  );
};

export default FixedVideoBackground;
