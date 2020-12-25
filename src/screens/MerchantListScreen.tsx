import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native-gesture-handler';

import IconReload from '../assets/IconReload.svg';
import Input from '../components/common/Input';
import LayoutScreen from '../components/common/LayoutScreen';
import Pill from '../components/common/Pill';
import Spacer from '../components/common/Spacer';
import MerchantCard from '../components/merchant/MerchantCard';
import {Colors, Shadow} from '../configs/theme_config';
import {
  MerchantListScreenNavigationProp,
  MerchantListScreenRouteProp,
} from './ScreenProps';

const styles = StyleSheet.create({
  searchInput: {
    borderColor: Colors.Primary,
    backgroundColor: Colors.White,
    paddingVertical: 10,
    ...Shadow.Medium,
  },
  iconReload: {
    borderColor: Colors.Secondary,
    borderWidth: 2,
    borderRadius: 20,
  },
});
type Props = {
  route: MerchantListScreenRouteProp;
  navigation: MerchantListScreenNavigationProp;
};
const MerchantListScreen: React.FC<Props> = ({navigation}) => {
  return (
    <LayoutScreen scrollable={false}>
      <View style={{paddingHorizontal: 26, paddingTop: 10}}>
        <Input placeholder="Search" style={styles.searchInput} />
        <Spacer w={11} />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flexDirection: 'row', flex: 1}}>
            <Pill text="Filter" />
            <Spacer w={6} />
            <Pill text="Promo" />
          </View>
          <TouchableNativeFeedback
            onPress={() => navigation.navigate('OrderList')}>
            <View style={styles.iconReload}>
              <IconReload />
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
      <Spacer h={12} />
      <ScrollView style={{paddingHorizontal: 26}}>
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ProductDetail')}
            key={i}>
            <MerchantCard variant={i % 2 === 0 ? 'white' : 'pink'} />
          </TouchableOpacity>
        ))}
        <Spacer h={40} />
      </ScrollView>
    </LayoutScreen>
  );
};

export default MerchantListScreen;
