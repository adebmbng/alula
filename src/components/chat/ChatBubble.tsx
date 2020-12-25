import React from 'react';
import {View} from 'react-native';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';

import {Colors} from '../../configs/theme_config';
import Image from '../common/Image';
import Spacer from '../common/Spacer';
import Text from '../common/Text';

export const ChatContainer: React.FC<{
  userId: string | number;
  senderUserId: string | number;
}> = ({children, userId, senderUserId}) => {
  return (
    <View
      style={{
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.PrimarySoft,
        backgroundColor: Colors.White,
        maxWidth: 300,
        marginBottom: 8,
        marginHorizontal: 10,
        alignSelf: senderUserId === userId ? 'flex-end' : 'flex-start',
      }}>
      {children}
    </View>
  );
};

export const ChatOrder: React.FC<{
  name: string;
  quantity: number;
  image: string;
  dueDate: number;
  status: 'done' | 'ongoing';
}> = ({name, image, quantity, dueDate, status}) => {
  return (
    <View>
      <View style={{padding: 10}}>
        <Text value={name} variant="title" color="secondary" />
        <View style={{marginTop: 10, flexDirection: 'row'}}>
          <Image source={{uri: image}} width={45} height={45} />
          <Spacer w={10} />
          <View>
            <Text value={`${quantity} pcs`} color="secondary" />
            <Text value={`Due Date ${dueDate} Days`} color="grey-medium" />
          </View>
        </View>
        <Spacer h={10} />
      </View>
      <View
        style={{
          backgroundColor: Colors.PrimarySoft,
          padding: 10,
          alignItems: 'center',
        }}>
        <TouchableNativeFeedback onPress={() => console.log('Selesai')}>
          <Text
            value={status === 'done' ? 'Order Selesai' : 'Check Status'}
            variant="title"
            color="secondary"
          />
        </TouchableNativeFeedback>
      </View>
    </View>
  );
};

export const ChatThank: React.FC<{text: string}> = ({text}) => {
  return (
    <View style={{padding: 10}}>
      <Text value="Terima Kasih!" color="secondary" variant="title" />
      <Spacer h={10} />
      <Text value={text} />
    </View>
  );
};

export const ChatText: React.FC<{text: string}> = ({text}) => {
  return (
    <View style={{padding: 10}}>
      <Text value={text} />
    </View>
  );
};
