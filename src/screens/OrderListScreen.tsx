import React from 'react';
import {StyleSheet, View} from 'react-native';

import IconArrowRightWhite from '../assets/IconArrowRightWhite.svg';
import IconBoard from '../assets/IconBoard.svg';
import IconCartGrey from '../assets/IconCartGrey.svg';
import Button from '../components/common/Button';
import LayoutScreen from '../components/common/LayoutScreen';
import Spacer from '../components/common/Spacer';
import Text from '../components/common/Text';
import {Colors} from '../configs/theme_config';
import {
  OrderListScreenNavigationProp,
  OrderListScreenRouteProp,
} from './ScreenProps';

const styles = StyleSheet.create({
  itemContainer: {
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Colors.GreyMedium,
    paddingBottom: 8,
  },
  button: {
    minWidth: 0,
    minHeight: 0,
    width: 120,
    height: 35,
    paddingVertical: 0,
    alignSelf: 'flex-end',
    borderRadius: 20,
  },
});

interface Props {
  navigation: OrderListScreenNavigationProp;
  route: OrderListScreenRouteProp;
}
const orderList = [{active: true}, {active: false}, {active: false}];
// const orderList: {active: boolean}[] = [];

const OrderListScreen: React.FC<Props> = ({navigation}) => {
  return (
    <LayoutScreen>
      <View style={{padding: 28, flex: 1}}>
        {orderList.length > 0 &&
          orderList.map(({active}, i) => (
            <View style={styles.itemContainer} key={i}>
              <IconBoard />
              <Spacer w={18} />
              <View style={{flex: 1}}>
                <Text value="Kartu Nama" color="secondary" variant="title" />
                <Text value="Copy Center" color="grey-medium" />
                <Text value="18 Desember 2020" color="grey-medium" />
              </View>
              <Button
                value={active ? 'Chat' : 'Order Lagi'}
                renderIconRight={() => <IconArrowRightWhite />}
                style={styles.button}
                variant={active ? 'primary' : 'secondary'}
                onPress={() =>
                  active
                    ? navigation.navigate('Chat')
                    : navigation.navigate('ProductDetail')
                }
              />
            </View>
          ))}
        {orderList.length <= 0 && (
          <View style={{flex: 1, justifyContent: 'space-between'}}>
            <View style={{alignItems: 'center', flex: 1}}>
              <IconCartGrey />
              <Spacer h={60} />
              <Text
                value="Pesanan Kamu Belum Ada Nih!"
                color="primary"
                variant="title"
              />
              <Spacer h={20} />
              <Text
                value="Klik tombol biru untuk cetak karyamu"
                variant="title"
              />
            </View>
            <Spacer h={50} />
            <View>
              <Button
                value="Cetak Sekarang"
                variant="secondary"
                style={{borderRadius: 50}}
                onPress={() => navigation.navigate('Home')}
              />
            </View>
          </View>
        )}
      </View>
    </LayoutScreen>
  );
};

export default OrderListScreen;
