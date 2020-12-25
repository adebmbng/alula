import React from 'react';
import {View} from 'react-native';

const Spacer = ({w = 0, h = 0}) => {
  return <View style={{width: w, height: h}} />;
};

export default Spacer;
