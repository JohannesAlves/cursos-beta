export interface ISidebarItemProps {
  children: React.ReactNode;
  icon: React.ReactNode;
  href: string;
  onClick: React.MouseEventHandler<HTMLAnchorElement>;
  isActive: boolean;
}
