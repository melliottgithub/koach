import React from 'react';
import MenuBar from './components/MenuBar';
import './App.css';

const menuItems = [
  { label: 'Home', url: '/' },
  { label: 'About', url: '/about' },
  { label: 'Contact', url: '/contact' },
];

const App: React.FC = () => {
  return (
    <div className="App">
      <MenuBar items={menuItems} />
    </div>
  );
};

export default App;
