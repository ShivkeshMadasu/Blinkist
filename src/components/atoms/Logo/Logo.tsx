import React from 'react';
import logo from '../../../assets/logo.png';

type logoProps={}

function Logo(props:logoProps) {
  return <div>
      <img src={logo} alt='Blinkist' width="124px" height="26px"/>
  </div>;
}

export default Logo;
