import React, { useEffect, useState } from 'react';

const DesktopModeSwitcher = () => {
  const [desktopMode, setDesktopMode] = useState(false);

  useEffect(() => {
    toggleDesktopMode();
  }, []);

  const toggleDesktopMode = () => {
    setDesktopMode(prevMode => !prevMode);

    if (desktopMode) {
      window.innerWidth = 1440; // Set your desired desktop width
    } else {
      window.innerWidth = 1024; // Set your desired mobile width
    }

    window.dispatchEvent(new Event('resize'));
  };

  return (
    <div>
      <button onClick={toggleDesktopMode} className='bg-orange-500 p-4 text-lg font-bold'>
        Click Here
      </button>
    </div>
  );
};

export default DesktopModeSwitcher;
