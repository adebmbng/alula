import React from 'react';
import {ImageProps, View} from 'react-native';
// @ts-ignore
import Image_ from 'react-native-image-progress';

import {Colors} from '../../configs/theme_config';

interface Props extends ImageProps {
  backgroundColor?: typeof Colors;
}

const Image: React.FC<Props> = ({
  source,
  width,
  height,
  borderRadius = 10,
  backgroundColor = Colors.GreySoft,
}) => {
  return (
    <View
      style={{
        borderRadius,
        overflow: 'hidden',
        backgroundColor: backgroundColor as string,
        width,
        height,
      }}>
      <Image_
        source={source}
        style={{
          width,
          height,
          borderRadius: 10,
          backgroundColor: backgroundColor as string,
        }}
      />
    </View>
  );
};

export default Image;
