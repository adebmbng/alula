import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';

import IconArrowRightWhite from '../assets/IconArrowRightWhite.svg';
import IconCart from '../assets/IconCart.svg';
import IconGuard from '../assets/IconGuard.svg';
import IconPaper from '../assets/IconPaper.svg';
import IconQuestion from '../assets/IconQuestion.svg';
import Button from '../components/common/Button';
import Image from '../components/common/Image';
import LayoutScreen from '../components/common/LayoutScreen';
import List from '../components/common/List';
import Spacer from '../components/common/Spacer';
import Text from '../components/common/Text';
import {Colors} from '../configs/theme_config';
import {
  ProfileScreenNavigationProp,
  ProfileScreenRouteProp,
} from './ScreenProps';

const styles = StyleSheet.create({
  infoContainer: {
    padding: 18,
    borderWidth: 1,
    borderColor: Colors.Primary,
    borderRadius: 10,
    flexDirection: 'row',
  },
  info: {
    borderBottomColor: Colors.GreyMedium,
    borderBottomWidth: 1,
    paddingVertical: 7,
  },
});

interface Props {
  navigation: ProfileScreenNavigationProp;
  route: ProfileScreenRouteProp;
}

const ProfileScreen: React.FC<Props> = ({navigation}) => {
  return (
    <LayoutScreen>
      <View style={{padding: 28}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text value="Detail Personal" variant="title" color="primary" />
          <TouchableNativeFeedback
            onPress={() => navigation.navigate('ProfileEdit')}>
            <Text value="Ubah" variant="title" color="secondary" />
          </TouchableNativeFeedback>
        </View>
        <Spacer h={10} />
        <View style={styles.infoContainer}>
          <Image
            source={{uri: 'http://placeimg.com/640/480/any'}}
            width={80}
            height={80}
          />
          <Spacer w={10} />
          <View style={{flex: 1}}>
            <Text value="Marvis Ighedosa" variant="title" color="secondary" />
            <View style={styles.info}>
              <Text value="Dosamarvis@gmail.com" />
            </View>
            <View style={styles.info}>
              <Text value="+234 9011039271" />
            </View>
            <View style={[styles.info, {borderBottomWidth: 0}]}>
              <Text value="No 15 uti street off ovie palace road effurun delta state" />
            </View>
          </View>
        </View>
        <Spacer h={27} />
        <List
          value="Pesanan"
          variant="primary"
          onPress={() => navigation.navigate('OrderList')}
          renderLeft={() => <IconCart />}
        />
        <List
          value="Pertanyaan"
          variant="primary"
          onPress={() => console.log('FAQ')}
          renderLeft={() => <IconQuestion />}
        />
        <List
          value="Kebijakan Privasi"
          variant="primary"
          onPress={() => console.log('TermCondition')}
          renderLeft={() => <IconGuard />}
        />
        <List
          value="Ketentuan Layanan"
          variant="primary"
          onPress={() => console.log('SupportInfo')}
          renderLeft={() => <IconPaper />}
        />
        <Spacer h={38} />
        <View style={{alignItems: 'center'}}>
          <Button
            value="Keluar"
            renderIconRight={() => <IconArrowRightWhite />}
            full={false}
            style={{minWidth: 0, width: 150}}
            onPress={() => navigation.navigate('AuthMain')}
          />
        </View>
      </View>
    </LayoutScreen>
  );
};

export default ProfileScreen;
