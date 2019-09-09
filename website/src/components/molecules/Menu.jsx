import React from 'react'

import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <nav className="menu">
      <NavLink to="/" exact activeClassName="active" className="menu__link text-light text-content">Proyectos
        <span className="font-icon">arrow_drop_down</span>
      </NavLink>
      <nav className="menu-filter">
        <a href="#" className="menu-filter__link">React</a>
        <a href="#" className="menu-filter__link">Vuejs</a>
        <a href="#" className="menu-filter__link">Angular</a>
        <a href="#" className="menu-filter__link">Vanillajs</a>
        <a href="#" className="menu-filter__link">HTML & CSS only</a>
      </nav>
      <NavLink to="/enviar-proyecto" activeClassName="active" className="menu__link text-light text-content">Enviar proyecto</NavLink>
      <NavLink to="/contactanos" activeClassName="active" className="menu__link text-light text-content">Contactanos</NavLink>
    </nav>
  )
}

export default Menu
