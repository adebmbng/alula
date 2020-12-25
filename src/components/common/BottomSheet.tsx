import React from 'react';
import {View} from 'react-native';
import {
  ScrollView,
  TouchableNativeFeedback,
} from 'react-native-gesture-handler';
import {Modalize} from 'react-native-modalize';
import RBSheet from 'react-native-raw-bottom-sheet';

import IconBack from '../../assets/IconBack.svg';
import {Colors} from '../../configs/theme_config';
import Spacer from './Spacer';
import Text from './Text';

interface Props {
  title?: string;
  onClose?: () => void;
  forwardRef: React.RefObject<RBSheet>;
}

const BottomSheet: React.FC<Props> = ({
  title,
  onClose,
  forwardRef,
  children,
}) => {
  return (
    <Modalize ref={forwardRef} modalHeight={400}>
      <View
        style={{
          padding: 18,
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: Colors.White,
          borderTopRightRadius: 8,
          borderTopLeftRadius: 8,
          // ...Shadow.Medium,
        }}>
        <TouchableNativeFeedback
          onPress={() => {
            onClose && onClose();
            forwardRef.current?.close();
          }}>
          <IconBack />
        </TouchableNativeFeedback>
        <Spacer w={10} />
        <Text value={title || ''} variant="title" color="primary" />
      </View>
      <ScrollView
        style={{
          backgroundColor: Colors.White,
          height: 450,
          padding: 24,
          paddingBottom: 100,
        }}>
        {children}
        <Spacer h={120} />
      </ScrollView>
    </Modalize>
  );
};

export default BottomSheet;
