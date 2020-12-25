import React from 'react';
import {StyleSheet, View} from 'react-native';
// @ts-ignore
import Image from 'react-native-image-progress';

import {Colors, Shadow} from '../../configs/theme_config';
import Text from '../common/Text';

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    overflow: 'hidden',
    ...Shadow.Medium,
  },
  image: {
    width: '100%',
    height: 120,
    backgroundColor: Colors.GreySoft,
  },
  text: {
    textAlign: 'center',
  },
});
interface Props {
  title: string;
}

const CategoryCard: React.FC<Props> = ({title}) => {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: 'http://placeimg.com/640/480/any'}}
        style={styles.image}
      />
      <View
        style={{
          backgroundColor: Colors.Primary,
          padding: 16,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
        }}>
        <Text value={title} color="white" style={styles.text} />
      </View>
    </View>
  );
};

export default CategoryCard;
