import { IContainerProps } from './types';

export const Container: React.FC<IContainerProps> = ({ children }) => {
  return (
    <div className="flex flex-col  min-h-screen w-full bg-gradient-to-r from-slate-500 to-slate-800 p-5">
      {children}
    </div>
  );
};
