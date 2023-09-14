import React, { FC } from 'react';
import MenuItem from './MenuItem';

interface MenuItemProps {
  label: string;
  url: string;
}

interface MenuBarProps {
  items: MenuItemProps[];
}

const MenuBar: FC<MenuBarProps> = ({ items }) => {
  return (
    <nav className="menu-bar">
      <ul className="menu-list">
        {items.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </ul>
    </nav>
  );
};

export default MenuBar;
