import React from 'react';
import {View} from 'react-native';
// @ts-ignore
import Image from 'react-native-image-progress';

// import IconStar from "../../assets/IconStar.svg";
import {Colors} from '../../configs/theme_config';
import Spacer from '../common/Spacer';
import Text from '../common/Text';

type Variant = 'pink' | 'white';

interface Props {
  variant: Variant;
}

const MerchantCard: React.FC<Props> = ({variant}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        borderRadius: 10,
        backgroundColor: variant === 'pink' ? Colors.PrimarySoft : Colors.White,
        padding: 10,
      }}>
      <Image
        source={{uri: 'http://placeimg.com/640/480/any'}}
        style={{
          height: 74,
          width: 100,
          borderRadius: 10,
          backgroundColor: Colors.GreySoft,
        }}
      />
      <Spacer w={27} />
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <Text value="Copy Center" color="secondary" />
        <Text value="Pengerjaan 7 hari" color="secondary" variant="caption" />
        <View>
          <Text value="Harga mulai dari" color="secondary" variant="caption" />
          <Text value="Rp 20.000" color="secondary" variant="caption" />
        </View>
      </View>
      <View style={{justifyContent: 'space-between', alignItems: 'flex-end'}}>
        <View style={{flexDirection: 'row'}}>
          {/* Still not needed */}
          {/* <IconStar /> */}
          {/* <Text value="8.5" color="secondary" variant="caption" /> */}
        </View>
        <Text value="3.5 km" color="secondary" variant="caption" />
      </View>
    </View>
  );
};

export default MerchantCard;
