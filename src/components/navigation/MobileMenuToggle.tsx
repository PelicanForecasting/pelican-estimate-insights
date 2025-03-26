
import React from 'react';

interface MobileMenuToggleProps {
  isOpen: boolean;
  onClick: () => void;
}

const MobileMenuToggle: React.FC<MobileMenuToggleProps> = ({ isOpen, onClick }) => {
  return (
    <button
      className="text-gray-800 p-2 focus:outline-none"
      onClick={onClick}
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <div className="w-6 flex flex-col justify-center items-center">
        <span className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`} />
        <span className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
        <span className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`} />
      </div>
    </button>
  );
};

export default MobileMenuToggle;
