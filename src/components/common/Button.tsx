import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableNativeFeedback,
  TouchableNativeFeedbackProps,
  View,
} from 'react-native';

import {Colors, Shadow} from '../../configs/theme_config';
import Spacer from './Spacer';
import Text from './Text';

type Variant = 'primary' | 'primary-soft' | 'primary-outlined' | 'secondary';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 13,
    paddingHorizontal: 24,
    backgroundColor: Colors.Primary,
    borderRadius: 38,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 195,
    borderWidth: 1,
    borderColor: Colors.Primary,
    maxHeight: 50,
    ...Shadow.Medium,
  },
  primarySoft: {
    backgroundColor: Colors.PrimarySoft,
    borderColor: Colors.PrimarySoft,
    borderRadius: 9,
    ...Shadow.None,
  },
  primaryOutlined: {
    backgroundColor: Colors.White,
    borderRadius: 9,
    ...Shadow.None,
  },
  secondary: {
    backgroundColor: Colors.Secondary,
    borderColor: Colors.Secondary,
    borderRadius: 9,
    ...Shadow.None,
  },
});

interface Props extends TouchableNativeFeedbackProps {
  value: string;
  renderIcon?: () => React.ReactElement;
  renderIconRight?: () => React.ReactElement;
  textStyle?: StyleProp<TextStyle>;
  full?: boolean;
  variant?: Variant;
}

const Button: React.FC<Props> = ({
  value,
  renderIcon,
  renderIconRight,
  textStyle,
  full = false,
  variant = 'primary',
  ...props
}) => {
  return (
    <TouchableNativeFeedback {...props}>
      <View
        style={[
          styles.container,
          full ? {width: '100%'} : {},
          variant === 'primary-outlined' ? styles.primaryOutlined : {},
          variant === 'primary-soft' ? styles.primarySoft : {},
          variant === 'secondary' ? styles.secondary : {},
          props.style,
        ]}>
        {renderIcon && (
          <>
            {renderIcon()}
            <Spacer w={10} />
          </>
        )}
        <Text
          value={value}
          color={
            variant === 'primary-outlined'
              ? 'primary'
              : variant === 'primary-soft'
              ? 'secondary'
              : 'white'
          }
          style={[{textAlign: 'center'}, textStyle]}
        />
        {renderIconRight && (
          <>
            <Spacer w={10} />
            {renderIconRight()}
          </>
        )}
      </View>
    </TouchableNativeFeedback>
  );
};

export default Button;
