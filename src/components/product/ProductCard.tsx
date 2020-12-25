import React from 'react';
import {StyleSheet, View} from 'react-native';
// @ts-ignore
import Image from 'react-native-image-progress';

import {Colors, Shadow} from '../../configs/theme_config';
import Spacer from '../common/Spacer';
import Text from '../common/Text';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.White,
    paddingTop: 7,
    paddingHorizontal: 10,
    paddingBottom: 19,
    borderRadius: 10,
    marginHorizontal: 3,
    ...Shadow.Medium,
  },
  imageContainer: {
    backgroundColor: Colors.White,
    borderRadius: 10,
    ...Shadow.Medium,
  },
  image: {
    width: '100%',
    height: 109,
    borderRadius: 10,
    backgroundColor: Colors.GreySoft,
  },
  text: {
    textAlign: 'center',
  },
});
interface Props {
  title: string;
}

const ProductCard: React.FC<Props> = ({title}) => {
  return (
    <View style={{padding: 10}}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{uri: 'http://placeimg.com/640/480/any'}}
            style={styles.image}
          />
        </View>
        <Spacer h={23} />
        <Text value={title} style={styles.text} color="primary" />
      </View>
    </View>
  );
};

export default ProductCard;
