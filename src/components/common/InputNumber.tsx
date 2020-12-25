import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput, TouchableNativeFeedback} from 'react-native-gesture-handler';

import IconArrowLeft from '../../assets/IconArrowLeft.svg';
import IconArrowRight from '../../assets/IconArrowRight.svg';
import {Colors, Shadow} from '../../configs/theme_config';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    width: 82,
    height: 44,
    borderRadius: 8,
    backgroundColor: Colors.White,
    textAlign: 'center',
    ...Shadow.Medium,
  },
  arrow: {
    padding: 17,
  },
});

interface Props {
  value: number;
  onDecrease: (val: number) => void;
  onIncrease: (val: number) => void;
  onChange: (val: number) => void;
}

const InputNumber: React.FC<Props> = ({
  value,
  onDecrease,
  onIncrease,
  onChange,
}) => {
  return (
    <View style={styles.container}>
      <TouchableNativeFeedback onPress={() => onDecrease(value - 1)}>
        <View style={styles.arrow}>
          <IconArrowLeft />
        </View>
      </TouchableNativeFeedback>
      <TextInput
        keyboardType="numeric"
        value={value.toString()}
        style={styles.input}
        onChangeText={(val) => onChange(Number(val))}
      />
      <TouchableNativeFeedback onPress={() => onIncrease(value + 1)}>
        <View style={styles.arrow}>
          <IconArrowRight />
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

export default InputNumber;
