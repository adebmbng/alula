import React from 'react';
import {StyleSheet, View} from 'react-native';
// @ts-ignore
import Image from 'react-native-image-progress';

import IconArrowRightWhite from '../assets/IconArrowRightWhite.svg';
import IconCaretBottomSecondary from '../assets/IconCaretBottomSecondary.svg';
import Button from '../components/common/Button';
import Divider from '../components/common/Divider';
import Input from '../components/common/Input';
import LayoutScreen from '../components/common/LayoutScreen';
import Spacer from '../components/common/Spacer';
import Text from '../components/common/Text';
import {Colors, Shadow} from '../configs/theme_config';
import {
  OrderSummaryScreenNavigationProp,
  OrderSummaryScreenRouteProp,
} from './ScreenProps';

const styles = StyleSheet.create({
  container: {
    padding: 28,
    backgroundColor: Colors.White,
  },
  image: {
    height: 98,
    width: 98,
  },
});

interface Props {
  navigation: OrderSummaryScreenNavigationProp;
  routes: OrderSummaryScreenRouteProp;
}

const OrderSummaryScreen: React.FC<Props> = ({navigation}) => {
  return (
    <LayoutScreen>
      <View style={[styles.container, {...Shadow.Medium}]}>
        <Text value="Alamat Pengiriman" variant="title" color="secondary" />
        <Spacer h={15} />
        <Text value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," />
        <Spacer h={20} />
        <Button value="Ganti Alamat" variant="primary-outlined" />
      </View>
      <View style={[styles.container, {marginTop: 10}]}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={{uri: 'http://placeimg.com/640/480/any'}}
            style={styles.image}
          />
          <Spacer w={12} />
          <View>
            <Text value="Kartu Nama" variant="title" color="primary" />
            <Spacer h={8} />
            <Text value="150 pcs" color="dark" />
            <Spacer h={8} />
            <Text value="Estimasi Pengerjaan 5 hari" color="grey-medium" />
          </View>
        </View>
        <View style={{flexDirection: 'row', marginTop: 32}}>
          <View>
            <Text value="Jenis Kertas" color="grey-medium" />
            <Spacer h={12} />
            <Text value="Ukuran Produk" color="grey-medium" />
            <Spacer h={12} />
            <Text value="Sisi Cetakan" color="grey-medium" />
            <Spacer h={12} />
            <Text value="Finishing" color="grey-medium" />
          </View>
          <Spacer w={28} />
          <View>
            <Text value="Art Carton 260 gsm" />
            <Spacer h={12} />
            <Text value="9.0 x 5.5 cm" />
            <Spacer h={12} />
            <Text value="1 Sisi" />
            <Spacer h={12} />
            <Text value="Matte" />
          </View>
        </View>
        <Divider />
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <Text value="Pengiriman" variant="title" color="secondary" />
            <Spacer h={10} />
            <Text value="Rp 10.000" color="dark" />
          </View>
          <Spacer w={20} />
          <View style={{flex: 1}}>
            <Button
              value="Anteraja"
              variant="primary-soft"
              renderIconRight={() => <IconCaretBottomSecondary />}
              style={{minWidth: 0}}
            />
          </View>
        </View>
        <Divider />
        <View>
          <View style={{flex: 1}}>
            <Text value="Kode Promo" variant="title" color="secondary" />
            <Spacer h={10} />
          </View>
          <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
            <View style={{flex: 1}}>
              <Input variant="primary" />
            </View>
            <Spacer w={20} />
            <View style={{flex: 1}}>
              <Button
                value="Terapkan"
                variant="primary-soft"
                style={{minWidth: 0}}
              />
            </View>
          </View>
        </View>
        <Spacer h={14} />
        <View>
          <Text value="Ringkasan Pesanan" variant="title" color="secondary" />
          <Spacer h={14} />
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <Text value="Harga (150 item)" color="grey-medium" />
              <Spacer h={14} />
              <Text value="Ongkos Kirim" color="grey-medium" />
            </View>
            <Spacer w={20} />
            <View
              style={{
                borderBottomColor: Colors.Dark,
                borderBottomWidth: 1,
                flex: 1,
                alignItems: 'center',
                paddingBottom: 10,
              }}>
              <Text value="Rp 75.000" />
              <Spacer h={14} />
              <Text value="Rp 10.000" />
            </View>
          </View>
          <View style={{flexDirection: 'row', paddingTop: 10}}>
            <Text style={{flex: 1}} value="Total" variant="title" />
            <Spacer w={20} />
            <Text style={{flex: 1, textAlign: 'center'}} value="Rp 75.000" />
          </View>
        </View>
        <Spacer h={40} />
        <View style={{flexDirection: 'row', paddingTop: 10}}>
          <View style={{flex: 1}}>
            <Button
              value="Jenis Pembayaran"
              variant="primary-soft"
              style={{minWidth: 0}}
              full={true}
            />
          </View>
          <Spacer w={20} />
          <View style={{flex: 1}}>
            <Button
              value="Bayar"
              variant="secondary"
              style={{minWidth: 0}}
              full={true}
              renderIconRight={() => <IconArrowRightWhite />}
              onPress={() => navigation.navigate('Payment')}
            />
          </View>
        </View>
      </View>
    </LayoutScreen>
  );
};

export default OrderSummaryScreen;
