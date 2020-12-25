import React from 'react';
import {View} from 'react-native';

import IllustrationWelcome from '../assets/IllustrationWelcome.svg';
import Button from '../components/common/Button';
import LayoutScreen from '../components/common/LayoutScreen';
import Spacer from '../components/common/Spacer';
import Text from '../components/common/Text';
import {
  OnboardingScreenNavigationProp,
  OnboardingScreenRouteProp,
} from './ScreenProps';

type Props = {
  route: OnboardingScreenRouteProp;
  navigation: OnboardingScreenNavigationProp;
};
const OnboardingScreen: React.FC<Props> = ({navigation}) => {
  return (
    <LayoutScreen>
      <View
        style={{
          alignItems: 'center',
          paddingTop: 26,
        }}>
        <Text
          value="Hello Jon!"
          color="secondary"
          variant="title"
          style={{fontSize: 30}}
        />
        <Spacer h={21} />
        <Text
          value="“Color is a power which directly influences the soul.”"
          color="secondary"
          variant="title"
        />
        <Text
          value="- Wassily Kandinsky - "
          color="secondary"
          variant="title"
        />
        <Spacer h={71} />
        <IllustrationWelcome />
        <Spacer h={38} />
        <Button value="MULAI" onPress={() => navigation.navigate('Home')} />
      </View>
    </LayoutScreen>
  );
};

export default OnboardingScreen;
