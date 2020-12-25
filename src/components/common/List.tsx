import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';

import IconCaretRightSecondary from '../../assets/IconCaretRightSecondary.svg';
import IconCheckPrimary from '../../assets/IconCheckPrimary.svg';
import {Colors, Shadow} from '../../configs/theme_config';
import Spacer from './Spacer';
import Text from './Text';

type Variant = 'default' | 'primary';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 14,
    borderRadius: 8,
    marginBottom: 14,
    backgroundColor: Colors.White,
    borderWidth: 1,
    borderColor: Colors.White,
    ...Shadow.Medium,
  },
});

interface Props {
  value: string;
  onPress?: () => void;
  checked?: boolean;
  variant?: Variant;
  renderLeft?: () => React.ReactElement;
}

const List: React.FC<Props> = ({
  value,
  onPress,
  checked,
  variant,
  renderLeft,
}) => {
  return (
    <TouchableNativeFeedback
      onPress={() => onPress && onPress()}
      style={{paddingHorizontal: 10, paddingTop: 5}}>
      <View
        style={[
          styles.container,
          variant === 'primary'
            ? {
                borderColor: Colors.Primary,
                borderRadius: 20,
                paddingVertical: 20,
                paddingHorizontal: 18,
                ...Shadow.None,
              }
            : {},
        ]}>
        {renderLeft && (
          <>
            {renderLeft()}
            <Spacer w={10} />
          </>
        )}
        <Text value={value} color="secondary" style={{flex: 1}} />
        {checked ? <IconCheckPrimary /> : <IconCaretRightSecondary />}
      </View>
    </TouchableNativeFeedback>
  );
};

export default List;
