import React from 'react';
import {View} from 'react-native';

import IconArrowRightWhite from '../assets/IconArrowRightWhite.svg';
import Button from '../components/common/Button';
import Image from '../components/common/Image';
import Input from '../components/common/Input';
import LayoutScreen from '../components/common/LayoutScreen';
import Spacer from '../components/common/Spacer';
import Text from '../components/common/Text';

const ProfileEditScreen = () => {
  return (
    <LayoutScreen>
      <View style={{padding: 28}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={{uri: 'http://placeimg.com/640/480/any'}}
            width={80}
            height={80}
          />
          <Spacer w={8} />
          <Text value="Upload Foto" color="secondary" variant="body-bold" />
        </View>
        <Spacer h={20} />
        <View style={{marginBottom: 8}}>
          <View style={{flexDirection: 'row'}}>
            <Text value="Nama Lengkap" color="secondary" />
            <Text value=" *" color="primary" />
          </View>
          <Input variant="line" value="Marvis Ighedosa" />
        </View>
        <View style={{marginBottom: 8}}>
          <View style={{flexDirection: 'row'}}>
            <Text value="Email" color="secondary" />
            <Text value=" *" color="primary" />
          </View>
          <Input variant="line" value="Dosamarvis@gmail.com" />
        </View>
        <View style={{marginBottom: 8}}>
          <View style={{flexDirection: 'row'}}>
            <Text value="Nomor HP" color="secondary" />
            <Text value=" *" color="primary" />
          </View>
          <Input variant="line" value="+234 9011039271" />
        </View>
        <View style={{marginBottom: 8}}>
          <View style={{flexDirection: 'row'}}>
            <Text value="Alamat" color="secondary" />
            <Text value=" *" color="primary" />
          </View>
          <Input
            variant="line"
            value="No 15 uti street off ovie palace road effurun delta state No 15 uti street off ovie palace road effurun delta state"
            multiline={true}
          />
        </View>
        <View style={{alignItems: 'center'}}>
          <Button
            value="Simpan"
            renderIconRight={() => <IconArrowRightWhite />}
            full={false}
            style={{minWidth: 0, width: 150}}
            variant="primary"
          />
        </View>
      </View>
    </LayoutScreen>
  );
};

export default ProfileEditScreen;
