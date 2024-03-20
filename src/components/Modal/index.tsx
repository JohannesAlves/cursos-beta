import { useEffect, useRef } from 'react';
import { IModalProps } from './types';

export const Modal: React.FC<IModalProps> = ({ children, isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={`min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover`}
    >
      <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
      <div
        ref={modalRef}
        className="p-5 relative rounded-3xl shadow-lg  bg-midnight-800 "
      >
        <div className="">{children}</div>
      </div>
    </div>
  );
};
