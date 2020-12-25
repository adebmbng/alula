import React from 'react';

import IconFacebook from '../../assets/IconFacebook.svg';
import {Colors} from '../../configs/theme_config';
import Button from './Button';

const ButtonFacebook = () => {
  return (
    <Button
      value="MASUK DENGAN FACEBOOK"
      style={{backgroundColor: Colors.Facebook, borderColor: Colors.Facebook}}
      renderIcon={() => <IconFacebook />}
    />
  );
};

export default ButtonFacebook;
