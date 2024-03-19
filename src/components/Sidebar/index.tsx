'use client';
import { SidebarItem } from '../SidebarItem';
import { SquaresPlusIcon, TagIcon } from '@heroicons/react/16/solid';
import { useSidebar } from './container';

export const Sidebar = () => {
  const { handleItemClick, activeItem } = useSidebar();

  return (
    <aside className="w-72 bg-slate-800  min-h-screen flex flex-col items-center pt-5 pb-2 space-y-7">
      <div className="w-full pr-3 flex flex-col gap-y-1 text-gray-500 fill-gray-500 text-sm">
        <div className=" pl-4 text-gray-400/60 text-xs text-[11px] uppercase">
          Menu
        </div>

        <SidebarItem
          onClick={() => handleItemClick(0)}
          isActive={activeItem === 0}
          href="/"
          icon={<SquaresPlusIcon width={20} height={20} />}
        >
          Produtos
        </SidebarItem>

        <SidebarItem
          onClick={() => handleItemClick(1)}
          isActive={activeItem === 1}
          href="/categorys"
          icon={<TagIcon width={20} height={20} />}
        >
          Categorias
        </SidebarItem>
      </div>
    </aside>
  );
};
