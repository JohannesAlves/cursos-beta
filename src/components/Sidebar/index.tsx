export const Sidebar = () => {
  return (
    <aside className="w-72 bg-slate-800 min-h-full h-screen flex flex-col items-center pt-5 pb-2 space-y-7">
      <div className="w-full pr-3 flex flex-col gap-y-1 text-gray-500 fill-gray-500 text-sm">
        <div className="font-QuicksandMedium pl-4 text-gray-400/60 text-xs text-[11px] uppercase">
          Menu
        </div>

        <div className="w-full flex items-center gap-x-1.5 group select-none">
          <div className="w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[102%] group-hover:translate-y-0 translate-y-0 bg-red-600 transition-all duration-300"></div>
          </div>
          <div className="bg-white/10 text-white group-hover:bg-white/10 w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-2 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm">
            <svg
              className="h-5 w-5 !fill-red-500 group-hover:fill-red-600 dark:fill-gray-600  transition-colors duration-200"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5 22h14a2 2 0 0 0 2-2v-9a1 1 0 0 0-.29-.71l-8-8a1 1 0 0 0-1.41 0l-8 8A1 1 0 0 0 3 11v9a2 2 0 0 0 2 2zm5-2v-5h4v5zm-5-8.59 7-7 7 7V20h-3v-5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v5H5z"></path>
            </svg>

            <span className="font-QuicksandMedium">Produtos</span>
          </div>
        </div>
      </div>
    </aside>
  );
};
