'use client';

import { useState } from 'react';

export const useSidebar = () => {
  const [activeItem, setActiveItem] = useState(0);

  const handleItemClick = (index: number) => {
    setActiveItem(index);
  };

  return { handleItemClick, activeItem };
};
