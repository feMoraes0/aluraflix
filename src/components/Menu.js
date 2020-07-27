import React from 'react';
import './Menu.css';
import Logo from './../assets/images/logo.png';

const Menu = () => {
  return (
    <header className='Menu'>
      <a href='/'>
        <img className='Logo' src={Logo} alt='Logo' />
      </a>
      <a className='ButtonLink' href="/">
        Novo vídeo
      </a>
    </header>
  );
}

export default Menu;