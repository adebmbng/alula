import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';
// @ts-ignore
import {SliderBox} from 'react-native-image-slider-box';

import IconBack from '../../assets/IconBack.svg';
import {Colors, Shadow} from '../../configs/theme_config';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 24,
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    left: 0,
    flex: 1,
    zIndex: 1,
  },
  iconBack: {
    height: 34,
    width: 34,
    backgroundColor: Colors.White,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 17,
    ...Shadow.Medium,
  },
  sliderDot: {
    width: 8,
    height: 8,
    top: -10,
  },
});

interface Props {
  onBack: () => void;
  images: string[];
}

const ProductHero: React.FC<Props> = ({onBack, images}) => {
  return (
    <View>
      <View style={styles.header}>
        <TouchableNativeFeedback onPress={() => onBack()}>
          <View style={styles.iconBack}>
            <IconBack />
          </View>
        </TouchableNativeFeedback>
      </View>
      <SliderBox
        parentWidth={width}
        images={images}
        dotColor={Colors.Secondary}
        inactiveDotColor={Colors.White}
        dotStyle={styles.sliderDot}
      />
    </View>
  );
};

export default ProductHero;
