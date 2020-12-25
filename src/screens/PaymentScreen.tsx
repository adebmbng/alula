import React from 'react';
import {View} from 'react-native';

import Button from '../components/common/Button';
import LayoutScreen from '../components/common/LayoutScreen';
import Spacer from '../components/common/Spacer';
import Text from '../components/common/Text';
import {Colors} from '../configs/theme_config';
import {
  PaymentScreenNavigationProp,
  PaymentScreenRouteProp,
} from './ScreenProps';

interface Props {
  navigation: PaymentScreenNavigationProp;
  routes: PaymentScreenRouteProp;
}

const PaymentScreen: React.FC<Props> = ({navigation}) => {
  return (
    <LayoutScreen>
      <View style={{padding: 28, alignItems: 'center'}}>
        <Text
          value="Order berhasil dimasukkan"
          color="secondary"
          variant="title"
        />
        <Spacer h={18} />
        <Text value="Inv-123456/689/Amnd" color="grey-medium" />
        <Spacer h={30} />
        <View>
          <View
            style={{
              backgroundColor: Colors.Secondary,
              padding: 18,
              borderTopStartRadius: 8,
              borderTopEndRadius: 8,
            }}>
            <Text value="Segera Lakukan Pembayaran" color="white" />
          </View>
          <View
            style={{
              backgroundColor: Colors.PrimarySoft,
              padding: 18,
              alignItems: 'center',
            }}>
            <Text value="Sebelum Jam 11.00" color="secondary" />
            <Spacer h={8} />
            <Text value="Tanggal 03/11/2020" color="secondary" />
          </View>
        </View>
        <Spacer h={30} />
        <Text value="Transfer Pembayaran ke" />
        <Spacer h={8} />
        <Text value="Nomor Virtual Account" />
        <Spacer h={8} />
        <View
          style={{
            backgroundColor: Colors.PrimarySoft,
            padding: 18,
            alignItems: 'center',
          }}>
          <Text value="1234.5678.9012.3456" color="secondary" />
        </View>
        <Spacer h={30} />
        <Text value="Jumlah yang harus dibayar" />
        <Spacer h={8} />
        <View
          style={{
            backgroundColor: Colors.PrimarySoft,
            padding: 18,
            alignItems: 'center',
          }}>
          <Text value="Rp 85.000,00" color="secondary" />
        </View>
        <Spacer h={70} />
        <View style={{flexDirection: 'row', paddingTop: 10}}>
          <View style={{flex: 1}}>
            <Button
              value="Belanja Lagi"
              variant="primary-soft"
              style={{minWidth: 0}}
              full={true}
              onPress={() => navigation.navigate('Home')}
            />
          </View>
          <Spacer w={20} />
          <View style={{flex: 1}}>
            <Button
              value="Status Pembayaran"
              variant="secondary"
              style={{minWidth: 0}}
              full={true}
              onPress={() => navigation.navigate('Payment')}
            />
          </View>
        </View>
      </View>
    </LayoutScreen>
  );
};

export default PaymentScreen;
