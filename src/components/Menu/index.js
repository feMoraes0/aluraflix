import React from 'react';
import {MenuContainer, Logo, ButtonLink} from './styles.js';
import logo from '../../assets/images/logo.png';

const Menu = () => {
  return (
    <MenuContainer>
      <Logo src={logo} />
      <ButtonLink href='/'>
        Novo vídeo
      </ButtonLink>
    </MenuContainer>
  );
};

export default Menu;