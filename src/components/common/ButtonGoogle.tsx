import React from 'react';

import IconGoogle from '../../assets/IconGoogle.svg';
import {Colors} from '../../configs/theme_config';
import Button from './Button';

const ButtonGoogle = () => {
  return (
    <Button
      value="MASUK DENGAN FACEBOOK"
      style={{backgroundColor: Colors.White, borderColor: Colors.White}}
      textStyle={{color: Colors.Dark}}
      renderIcon={() => <IconGoogle />}
    />
  );
};

export default ButtonGoogle;
