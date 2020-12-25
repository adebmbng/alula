import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';

import {Colors} from '../../configs/theme_config';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.White,
    flex: 1,
    paddingBottom: 0, // Platform.OS === "ios" ? 28 : 0,
  },
});

interface Props {
  scrollable?: boolean;
}
const LayoutScreen: React.FC<Props> = ({scrollable = true, children}) => {
  return (
    <>
      <SafeAreaView />
      {scrollable ? (
        <ScrollView style={styles.container}>{children}</ScrollView>
      ) : (
        <View style={styles.container}>{children}</View>
      )}
    </>
  );
};

export default LayoutScreen;
