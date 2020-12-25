import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';

import {Colors} from '../../configs/theme_config';
import Text from '../common/Text';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
  },
  button: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

interface Props {
  onPressUpload: () => void;
  onPressPrint: () => void;
}
const ProductActionButtons: React.FC<Props> = ({
  onPressPrint,
  onPressUpload,
}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.button, {backgroundColor: Colors.PrimarySoft}]}>
        <TouchableNativeFeedback onPress={() => onPressUpload()}>
          <Text value="Upload Design" variant="title" color="secondary" />
        </TouchableNativeFeedback>
      </View>
      <View style={[styles.button, {backgroundColor: Colors.Secondary}]}>
        <TouchableNativeFeedback onPress={() => onPressPrint()}>
          <Text value="Cetak Sekarang" variant="title" color="white" />
        </TouchableNativeFeedback>
      </View>
    </View>
  );
};

export default ProductActionButtons;
