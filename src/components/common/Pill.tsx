import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Colors} from '../../configs/theme_config';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    padding: 7,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.Primary,
    borderRadius: 8,
  },
});

interface Props {
  text: string;
}

const Pill: React.FC<Props> = ({text}) => {
  return (
    <View style={styles.container}>
      <Text value={text} color="primary" />
    </View>
  );
};

export default Pill;
