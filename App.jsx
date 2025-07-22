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
    backgroundColor: '#0A2342', // Deep blue
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
    backgroundColor: 'rgba(30, 64, 175, 0.85)', // Lighter blue
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 20,
    color: '#fff', // White text
    elevation: 3, // Android shadow
    shadowColor: '#1E40AF', // Blue shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },
  temperatureText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#FFD600', // Bright yellow
    textShadowColor: '#1E40AF', // Blue shadow
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 8,
  },
});

export default App;
