import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  TextInput,
  Text,
  SafeAreaView,
} from 'react-native';

const { width: deviceWidth, height: deviceHeight } = Dimensions.get('window');

function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Background Image */}
      <Image
        source={require('./images/weather.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      />

      {/* Overlay content */}
      <View style={styles.overlay}>
        {/* Text Input */}
        <TextInput
          placeholder="Enter City"
          placeholderTextColor="#aaa"
          style={styles.textInput}
          onChangeText={(text) => console.log(text)}
        />

        {/* Temperature Display */}
        <Text style={styles.temperatureText}>0°C</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  backgroundImage: {
    position: 'absolute',
    width: deviceWidth,
    height: deviceHeight,
  },
  overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  textInput: {
    width: '80%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 20,
    color: '#000',
    elevation: 3, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  temperatureText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#FF3B30',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
});

export default App;
