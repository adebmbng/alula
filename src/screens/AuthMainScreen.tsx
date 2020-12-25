import React from 'react';
import {TouchableNativeFeedback, View} from 'react-native';

import Button from '../components/common/Button';
import Illustration from '../components/common/Illustration';
import LayoutScreen from '../components/common/LayoutScreen';
import Spacer from '../components/common/Spacer';
import Text from '../components/common/Text';
import {
  AuthMainScreenNavigationProp,
  AuthMainScreenRouteProp,
} from './ScreenProps';

type Props = {
  route: AuthMainScreenRouteProp;
  navigation: AuthMainScreenNavigationProp;
};

const AuthMainScreen: React.FC<Props> = ({navigation}) => {
  return (
    <LayoutScreen>
      <Illustration.Welcome />
      <Spacer h={28} />
      <View style={{display: 'flex', alignItems: 'center'}}>
        <Text
          value="Print Dimana Aja, Kapan Aja"
          variant="title"
          color="primary"
        />
        <Spacer h={40} />
        <Button
          value="DAFTAR"
          onPress={() => navigation.navigate('AuthRegister')}
        />
        <Spacer h={16} />
        <Text value="SUDAH MEMPUNYAI AKUN?" />
        <Spacer h={8} />
        <TouchableNativeFeedback
          onPress={() => navigation.navigate('AuthLogin')}>
          <Text value="MASUK" color="secondary" />
        </TouchableNativeFeedback>
      </View>
    </LayoutScreen>
  );
};

export default AuthMainScreen;
