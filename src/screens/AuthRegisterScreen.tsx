import CheckBox from '@react-native-community/checkbox';
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
  AuthRegisterScreenNavigationProp,
  AuthRegisterScreenRouteProp,
} from './ScreenProps';

const styles = StyleSheet.create({
  checkbox: {
    width: 20,
    height: 20,
  },
});
type Props = {
  route: AuthRegisterScreenRouteProp;
  navigation: AuthRegisterScreenNavigationProp;
};
const AuthRegisterScreen: React.FC<Props> = ({navigation}) => {
  return (
    <LayoutScreen>
      <View
        style={{
          alignItems: 'center',
          padding: 28,
          paddingHorizontal: '15%',
        }}>
        <ImageLogo />
        <Spacer h={80} />
        <ButtonFacebook />
        <Spacer h={18} />
        <ButtonGoogle />
        <Spacer h={25} />
        <Text value="MASUK DENGAN E-MAIL" />
        <Spacer h={17} />
        <Input placeholder="Nama" renderLeftIcon={() => <IconCheckPrimary />} />
        <Input
          placeholder="Alamat E-mail"
          renderLeftIcon={() => <IconCheckPrimary />}
        />
        <Input
          placeholder="Password"
          secureTextEntry={true}
          renderLeftIcon={() => <IconEyeClosed />}
        />
        <Input
          placeholder="Nomor HP"
          renderLeftIcon={() => <IconCheckPrimary />}
        />
        <Input
          placeholder="Referal Code"
          renderLeftIcon={() => <IconCheckPrimary />}
        />
        <View
          style={{
            alignSelf: 'flex-start',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={styles.checkbox}>
            <CheckBox
              boxType="square"
              disabled={false}
              value={false}
              onValueChange={(val) => console.log(val)}
              style={styles.checkbox}
            />
          </View>
          <Spacer w={10} />
          <View>
            <Text value="Saya menyetujui" />
            <TouchableNativeFeedback
              onPress={() => navigation.navigate('AuthRegister')}>
              <Text value="Syarat dan ketentuan" color="secondary" />
            </TouchableNativeFeedback>
          </View>
        </View>
        <Spacer h={15} />
        <Button
          value="DAFTAR"
          full
          onPress={() => navigation.navigate('Onboarding')}
        />
      </View>
    </LayoutScreen>
  );
};

export default AuthRegisterScreen;
