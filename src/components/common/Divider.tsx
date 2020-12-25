import React from 'react';
import {View} from 'react-native';

import {Colors} from '../../configs/theme_config';

const Divider = () => {
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: Colors.GreyMedium,
        opacity: 0.62,
        marginTop: 16,
        marginBottom: 16,
      }}
    />
  );
};

export default Divider;
