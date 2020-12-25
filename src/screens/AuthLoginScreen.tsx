import React from 'react';
import {StyleSheet, TouchableNativeFeedback, View} from 'react-native';

import IconCheckPrimary from '../assets/IconCheckPrimary.svg';
import IconEyeClosed from '../assets/IconEyeClosed.svg';
import ImageLogo from '../assets/ImageLogo.svg';
import Button from '../components/common/Button';
import ButtonFacebook from '../components/common/ButtonFacebook';
import ButtonGoogle from '../components/common/ButtonGoogle';
import Input from '../components/common/Input';
import LayoutScreen from '../components/common/LayoutScreen';
import Spacer from '../components/common/Spacer';
import Text from '../components/common/Text';
import {
  AuthLoginScreenNavigationProp,
  AuthLoginScreenRouteProp,
} from './ScreenProps';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 26,
    paddingHorizontal: '15%',
  },
});

type Props = {
  route: AuthLoginScreenRouteProp;
  navigation: AuthLoginScreenNavigationProp;
};

const AuthLoginScreen: React.FC<Props> = ({navigation}) => {
  return (
    <LayoutScreen>
      <View style={styles.container}>
        <ImageLogo />
        <Spacer h={80} />
        <ButtonFacebook />
        <Spacer h={18} />
        <ButtonGoogle />
        <Spacer h={25} />
        <Text value="MASUK DENGAN E-MAIL" />
        <Spacer h={17} />
        <Input
          placeholder="Alamat E-mail"
          renderLeftIcon={() => <IconCheckPrimary />}
        />
        <Input
          placeholder="Password"
          secureTextEntry={true}
          renderLeftIcon={() => <IconEyeClosed />}
        />
        <Spacer h={25} />
        <Button
          value="MASUK"
          full
          onPress={() => navigation.navigate('Onboarding')}
        />
        <Spacer h={17} />
        <Text value="Lupa Password?" variant="body-bold" />
        <Spacer h={35} />
        <Text value="Belum MEMPUNYAI AKUN?" />
        <Spacer h={8} />
        <TouchableNativeFeedback
          onPress={() => navigation.navigate('AuthRegister')}>
          <Text value="DAFTAR" color="secondary" />
        </TouchableNativeFeedback>
      </View>
    </LayoutScreen>
  );
};

export default AuthLoginScreen;
