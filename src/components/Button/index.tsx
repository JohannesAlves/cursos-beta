import { IButtonProps } from './types';

export const Button: React.FC<IButtonProps> = ({ text, size }) => {
  return (
    <button className="text-gray-400 border-2  border-gray-700 rounded-lg hover:text-red-500 transition-all w-52 h-10">
      {text}
    </button>
  );
};
