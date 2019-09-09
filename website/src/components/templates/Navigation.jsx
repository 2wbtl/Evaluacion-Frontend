import React from 'react'
import Logo from '../molecules/Logo';
import Menu from '../molecules/Menu';

const Navigation = () => {
  return (
    <div className="main-header column-12 column-tab-4 column-lap-3">
      <div className="navigation">
        <Logo />
        <Menu />
      </div>
    </div>
  )
}

export default Navigation
