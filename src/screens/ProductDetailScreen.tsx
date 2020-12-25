import {Header} from '@react-navigation/stack';
import React, {useState} from 'react';
import {Alert, KeyboardAvoidingView, StyleSheet, View} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import {
  ScrollView,
  TouchableNativeFeedback,
} from 'react-native-gesture-handler';
import RBSheet from 'react-native-raw-bottom-sheet';

import BottomSheet from '../components/common/BottomSheet';
import InputNumber from '../components/common/InputNumber';
import LayoutScreen from '../components/common/LayoutScreen';
import List from '../components/common/List';
import Spacer from '../components/common/Spacer';
import Text from '../components/common/Text';
import ProductActionButtons from '../components/product/ProductActionButtons';
import ProductHero from '../components/product/ProductHero';
import ProductInfo from '../components/product/ProductInfo';
import {Colors} from '../configs/theme_config';
import {
  ProductDetailScreenNavigationProp,
  ProductDetailScreenRouteProp,
} from './ScreenProps';

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  content: {
    padding: 28,
  },
  quantityInput: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: 20,
  },
});

type Props = {
  route: ProductDetailScreenRouteProp;
  navigation: ProductDetailScreenNavigationProp;
};

type BottomSheetType = 'paperKind' | 'size' | 'side' | 'finishing';

const ProductDetailScreen: React.FC<Props> = ({navigation}) => {
  const sheetRef = React.useRef<RBSheet>(null);
  const [quantity, setQuantity] = useState(1);
  const [paperKind, setPaperKind] = useState<string | number | null>(null);
  const [size, setSize] = useState<string | number | null>(null);
  const [side, setSide] = useState<string | number | null>(null);
  const [finishing, setFinishing] = useState<string | number | null>(null);
  const [
    bootomSheetType,
    setBottomSheetType,
  ] = useState<BottomSheetType | null>(null);
  const [bottomSheetTitle, setBottomSheetTitle] = useState('');

  const handleShowBottomSheet = (type_: BottomSheetType) => {
    setBottomSheetType(type_);
    sheetRef.current?.open();
  };

  const handleSelectOrderProperty = (val: string | number | null) => {
    sheetRef.current?.close();
    switch (bootomSheetType) {
      case 'finishing':
        setFinishing(val);
        break;
      case 'paperKind':
        setPaperKind(val);
        break;
      case 'side':
        setSide(val);
        break;
      case 'size':
        setSize(val);
        break;
      default:
        break;
    }
  };

  const handlePickFile = async () => {
    try {
      const results = await DocumentPicker.pickMultiple({
        type: [DocumentPicker.types.images],
      });
      // TODO send to API
      Object.entries(results).forEach(([key, val]) => {
        console.log(key, val);
      });
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        Alert.alert('Terjadi kesalahan upload');
        throw err;
      }
    }
  };

  return (
    <LayoutScreen scrollable={false}>
      <ProductHero
        onBack={() => navigation.goBack()}
        images={[
          'http://placeimg.com/640/480/any',
          'http://placeimg.com/640/480/any',
          'http://placeimg.com/640/480/any',
        ]}
      />
      <ScrollView>
        <View style={styles.content}>
          <ProductInfo
            title="Kartu Nama"
            merchantName="Copy Center, 2.52 km"
            captionRight="1399 item terjual"
            captionBottom="Estimasi pengerjaan 5 hari"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised"
          />
          <Spacer h={30} />
          {[
            {title: 'Jenis Kertas', checked: paperKind, type_: 'paperKind'},
            {title: 'Ukuran Produk', checked: size, type_: 'size'},
            {title: 'Sisi Cetakan', checked: side, type_: 'side'},
            {title: 'Finishing', checked: finishing, type_: 'finishing'},
          ].map((v) => (
            <List
              key={v.title}
              value={v.title}
              checked={v.checked !== null}
              onPress={() => {
                handleShowBottomSheet(v.type_ as BottomSheetType);
                setBottomSheetTitle(v.title);
              }}
            />
          ))}
        </View>
        <View style={styles.quantityInput}>
          <KeyboardAvoidingView
            behavior="padding"
            keyboardVerticalOffset={Header.length}
            style={{justifyContent: 'center'}}>
            <InputNumber
              value={quantity}
              onDecrease={setQuantity}
              onIncrease={setQuantity}
              onChange={setQuantity}
            />
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
      <ProductActionButtons
        onPressPrint={() => navigation.navigate('OrderSummary')}
        onPressUpload={() => handlePickFile()}
      />
      <BottomSheet title={bottomSheetTitle} forwardRef={sheetRef}>
        {[0, 1, 2, 3, 4].map((val, i) => (
          <TouchableNativeFeedback
            key={i}
            onPress={() => handleSelectOrderProperty(val)}>
            <View
              style={{
                borderColor: Colors.Dark,
                borderBottomWidth: 1,
                marginBottom: 10,
              }}>
              <Text value="Lorem Ipsum" variant="body-bold" />
              <Text
                value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                style={{marginTop: 11, marginBottom: 16}}
              />
            </View>
          </TouchableNativeFeedback>
        ))}
      </BottomSheet>
    </LayoutScreen>
  );
};

export default ProductDetailScreen;
