import React from 'react';
import {View} from 'react-native';

import Spacer from '../common/Spacer';
import Text from '../common/Text';

interface Props {
  title: string;
  merchantName: string;
  captionRight: string;
  captionBottom: string;
  description: string;
}
const ProductInfo: React.FC<Props> = ({
  title,
  merchantName,
  captionRight,
  captionBottom,
  description,
}) => {
  return (
    <>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text value={title} variant="title" color="secondary" />
        <Text value={captionRight} color="dark" variant="caption" />
      </View>
      <Spacer h={6} />
      <Text value={merchantName} color="dark" />
      <Spacer h={10} />
      <Text value={captionBottom} variant="caption" />
      <Spacer h={16} />
      <Text value={description} color="grey-medium" />
    </>
  );
};

export default ProductInfo;
