import React from 'react';
import {MenuContainer, Logo, ButtonLink} from './styles.js';
import {Link} from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const Menu = () => {
  return (
    <MenuContainer>
      <Link to='/'>
        <Logo src={logo} />
      </Link>
      <ButtonLink to='/cadastro/video'>
        Novo vídeo
      </ButtonLink>
    </MenuContainer>
  );
};

export default Menu;