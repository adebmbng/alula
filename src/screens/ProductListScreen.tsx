import React from 'react';
import {ScrollView, View} from 'react-native';
import {
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native-gesture-handler';

import Input from '../components/common/Input';
import LayoutScreen from '../components/common/LayoutScreen';
import Spacer from '../components/common/Spacer';
import ProductCard from '../components/product/ProductCard';
import {Colors, Shadow} from '../configs/theme_config';
import {
  ProductListScreenNavigationProp,
  ProductListScreenRouteProp,
} from './ScreenProps';

type Props = {
  route: ProductListScreenRouteProp;
  navigation: ProductListScreenNavigationProp;
};

const ProductListScreen: React.FC<Props> = ({navigation}) => {
  return (
    <LayoutScreen scrollable={false}>
      <View style={{paddingHorizontal: 26, paddingTop: 10}}>
        <Input
          placeholder="Search"
          style={{
            borderColor: Colors.Primary,
            backgroundColor: Colors.White,
            paddingVertical: 10,
            ...Shadow.Medium,
          }}
        />
      </View>
      <Spacer h={12} />
      <ScrollView style={{paddingHorizontal: 26}}>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}>
          {[
            'Poster',
            'Flyer',
            'Brochure',
            'X-Banner',
            'Y-Banner',
            'Company Profile',
            'Poster',
            'Flyer',
            'Brochure',
            'X-Banner',
            'Y-Banner',
            'Company Profile',
            'Poster',
            'Flyer',
            'Brochure',
            'X-Banner',
            'Y-Banner',
            'Company Profile',
          ].map((title, i) => (
            <View
              key={i}
              style={{
                marginBottom: 10,
                // flex: 1,
                flexBasis: '50%',
                // marginRight: i % 2 === 0 ? 10 : 0,
              }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('MerchantList')}>
                <ProductCard title={title} />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </LayoutScreen>
  );
};

export default ProductListScreen;
