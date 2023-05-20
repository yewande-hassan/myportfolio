import React, { useEffect, useState } from 'react';

const CountingAnimation: React.FC = () => {
  const [currentCount, setCurrentCount] = useState(0);
  const endValue = 100;
  const duration = 3000; // 3 seconds
  const fps = 60;
  const frameDuration = 1000 / fps;
  const totalFrames = Math.round(duration / frameDuration);
  const increment = Math.ceil(endValue / totalFrames);

  useEffect(() => {
    let frame = 0;
    const count = () => {
        if (frame < totalFrames) {
            setCurrentCount((prevCount) => {
              const newValue = prevCount + increment;
              return newValue >= endValue ? endValue : newValue;
            });
            frame++;
            setTimeout(count, frameDuration);
          }
        };

    count();
  }, []);

  return <span>{currentCount}</span>;
};

export default CountingAnimation;
