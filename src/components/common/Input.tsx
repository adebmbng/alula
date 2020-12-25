import React from 'react';
import {StyleSheet, TextInput, TextInputProps, View} from 'react-native';

import {Colors} from '../../configs/theme_config';

type Variant = 'default' | 'primary' | 'line';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.InputBackground,
    padding: 14,
    paddingVertical: 10,
    borderRadius: 15,
    flex: 1,
    width: '100%',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  icon: {
    position: 'absolute',
    right: 14,
  },
});

interface Props extends TextInputProps {
  renderLeftIcon?: () => React.ReactElement;
  variant?: Variant;
}

const Input: React.FC<Props> = ({renderLeftIcon, variant, ...props}) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <TextInput
        {...props}
        style={[
          styles.container,
          variant === 'primary'
            ? {backgroundColor: Colors.White, borderColor: Colors.Primary}
            : {},
          variant === 'line'
            ? {
                backgroundColor: Colors.White,
                borderColor: Colors.GreyMedium,
                borderWidth: 0,
                borderBottomWidth: 1,
                borderRadius: 0,
                paddingLeft: 0,
              }
            : {},
          props.style,
        ]}
      />
      {renderLeftIcon && <View style={styles.icon}>{renderLeftIcon()}</View>}
    </View>
  );
};

export default Input;
