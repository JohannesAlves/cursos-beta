import Link from 'next/link';
import { ISidebarItemProps } from './types';

export const SidebarItem: React.FC<ISidebarItemProps> = ({
  children,
  icon,
  href,
  onClick,
  isActive,
}) => {
  return (
    <div className="w-full flex items-center gap-x-1.5 group select-none">
      <div className="w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden"></div>
      <Link
        onClick={onClick}
        href={href}
        className={` text-white group-hover:bg-red-500 w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-2 transition-all duration-200 group-hover:text-black text-sm ${
          isActive && 'bg-red-500'
        }`}
      >
        <span
          className={`text-gray-400 group-hover:text-white ${
            isActive && 'text-white'
          }`}
        >
          {icon}
        </span>
        <span
          className={`text-gray-400 group-hover:text-white ${
            isActive && 'text-white'
          }`}
        >
          {children}
        </span>
      </Link>
    </div>
  );
};
