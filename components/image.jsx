import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import React from 'react';

const { width: deviceWidth, height: deviceHeight } = Dimensions.get('window');

const BackgroundImage = () => {
  return (
    <View>
      {/* Background Image */}
      <Image
        source={require('../images/weather.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
        blurRadius={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    position: 'absolute',
    width: deviceWidth,
    height: deviceHeight,
    opacity: 0.25,
  },
});

export default BackgroundImage;
