import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
// @ts-ignore
import {SliderBox} from 'react-native-image-slider-box';

import IconReload from '../assets/IconReload.svg';
import IconUser from '../assets/IconUser.svg';
import IllustrationHowTo from '../assets/IllustrationHowTo.svg';
import CategoryCard from '../components/category/CategoryCard';
import Input from '../components/common/Input';
import LayoutScreen from '../components/common/LayoutScreen';
import Spacer from '../components/common/Spacer';
import Text from '../components/common/Text';
import {Colors, Shadow} from '../configs/theme_config';
import {useBannerList} from '../services/general_service';
import {HomeScreenNavigationProp, HomeScreenRouteProp} from './ScreenProps';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 26,
    paddingTop: 10,
  },
  inputSearch: {
    borderColor: Colors.Secondary,
    backgroundColor: Colors.White,
    paddingVertical: 10,
    marginBottom: 0,
    ...Shadow.Medium,
  },
  sliderContainer: {
    borderRadius: 13,
  },
  sliderDot: {
    width: 8,
    height: 8,
    top: 30,
  },
  category: {
    marginBottom: 16,
    flexBasis: '48%',
  },
  line: {
    marginTop: 31,
    marginBottom: 14,
    borderColor: Colors.Primary,
    borderWidth: 1,
  },
  howToContainer: {
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 60,
    backgroundColor: Colors.White,
    ...Shadow.Medium,
  },
  menuContainer: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  iconReload: {
    borderColor: Colors.Secondary,
    borderWidth: 2,
    borderRadius: 20,
  },
});

type Props = {
  route: HomeScreenRouteProp;
  navigation: HomeScreenNavigationProp;
};

const {width} = Dimensions.get('window');

const HomeScreen: React.FC<Props> = ({navigation}) => {
  const {data: bannerList} = useBannerList();

  return (
    <LayoutScreen>
      <View style={styles.container}>
        <Text value="Lokasi Anda" color="secondary" />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 6}}>
            <Spacer h={8} />
            <Input placeholder="Jakarta Selatan" style={styles.inputSearch} />
          </View>
          <View style={styles.menuContainer}>
            <TouchableNativeFeedback
              onPress={() => navigation.navigate('OrderList')}>
              <View style={styles.iconReload}>
                <IconReload />
              </View>
            </TouchableNativeFeedback>
            <Spacer w={20} />
            <TouchableNativeFeedback
              onPress={() => navigation.navigate('Profile')}>
              <IconUser />
            </TouchableNativeFeedback>
          </View>
        </View>
        <Spacer h={23} />
        <SliderBox
          parentWidth={width - 52}
          ImageComponentStyle={styles.sliderContainer}
          images={
            bannerList
              ? bannerList.map(({item}) => item.banner_url)
              : [
                  'https://ecs7-p.tokopedia.net/img/cache/1208/NsjrJu/2020/12/18/f5178377-faf7-4d6f-aade-f487b09ee8a9.jpg.webp',
                ]
          }
          dotColor={Colors.Secondary}
          inactiveDotColor={Colors.GreyMedium}
          dotStyle={styles.sliderDot}
        />
        <Spacer h={32} />
        <Text value="Kategori" variant="title" color="primary" />
        <Spacer h={16} />
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            flexWrap: 'wrap',
          }}>
          {[
            'Jasa Design',
            'Packaging',
            'Kebutuhan Marketing',
            'Kartu',
            'Foto dan Hadiah',
          ].map((title, i) => (
            <View
              key={i}
              style={[styles.category, {marginRight: i % 2 === 0 ? 10 : 0}]}>
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate('ProductList')}>
                <CategoryCard title={title} />
              </TouchableWithoutFeedback>
            </View>
          ))}
        </View>
        <View style={styles.line} />
        <Text value="Cara Memesan" variant="title" color="secondary" />
        <Spacer h={7} />
        <View style={styles.howToContainer}>
          <IllustrationHowTo />
          <View style={{flexShrink: 1}}>
            <Text value="Lorem Ipsum" variant="body-bold" />
            <Spacer h={14} />
            <Text value="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
          </View>
        </View>
      </View>
    </LayoutScreen>
  );
};

export default HomeScreen;
