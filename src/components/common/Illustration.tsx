import React from 'react';
import {StyleSheet, View} from 'react-native';

import IllustrationWelcome from '../../assets/IllustrationWelcome.svg';
import ImageLogo from '../../assets/ImageLogo.svg';
import {Colors, Shadow} from '../../configs/theme_config';
import Spacer from './Spacer';
import Text from './Text';

const styles = StyleSheet.create({
  welcomeContainer: {
    paddingTop: 26,
    paddingBottom: 18,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: Colors.White,
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    ...Shadow.Medium,
  },
});

const Welcome = () => {
  return (
    <View style={styles.welcomeContainer}>
      <Text
          value="ALULA PROJECTS"
          variant="title"
          color="primary"
      />
      <Spacer h={28} />
      <IllustrationWelcome />
    </View>
  );
};

const Onboarding = () => {
  return (
    <View>
      <Text value="Base Illustration" />
    </View>
  );
};

export default {
  Welcome,
  Onboarding,
};
