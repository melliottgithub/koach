import React, { FC } from 'react';

interface MenuItemProps {
  label: string;
  url: string;
}

const MenuItem: FC<MenuItemProps> = ({ label, url }) => {
  return (
    <li className="menu-item">
      <a href={url}>{label}</a>
    </li>
  );
};

export default MenuItem;
