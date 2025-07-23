import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  Text,
  SafeAreaView,
  Platform,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import BackgroundImage from './components/image';
import axios from 'axios';

const { width: deviceWidth, height: deviceHeight } = Dimensions.get('window');

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (!city) return;
    const handler = setTimeout(() => {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=abc123def456&units=metric`)
        .then(response => {
          setWeather(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }, 500);
    return () => {
      clearTimeout(handler);
    };
  }, [city]);

  return (
    <SafeAreaView style={styles.container}>
      {/* Gradient Background */}
      <LinearGradient
        colors={['#0A2342', '#274690', '#576CA8']}
        style={StyleSheet.absoluteFill}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      />

      <BackgroundImage />

      {/* Overlay content */}
      <View style={styles.overlay}>
        {/* Weather Icon */}
        <View style={styles.iconContainer}>
          <Feather name="cloud" size={60} color="#FFD600" />
        </View>

        {/* Text Input */}
        <View style={styles.glassBox}>
          <TextInput
            placeholder="Enter City"
            placeholderTextColor="#e0e7ef"
            style={styles.textInput}
            onChangeText={text => setCity(text)}
          />
        </View>

        {/* Temperature Display */}
        <View style={styles.glassBox}>
          <Text style={styles.temperatureText}>24°C</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A2342',
  },

  overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  iconContainer: {
    marginBottom: 30,
    backgroundColor: 'rgba(255, 214, 0, 0.15)',
    borderRadius: 50,
    padding: 15,
  },
  glassBox: {
    width: '80%',
    marginBottom: 20,
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 18,
    padding: 10,
    ...Platform.select({
      ios: {
        shadowColor: '#1E40AF',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        backdropFilter: 'blur(10px)',
      },
      android: {
        elevation: 6,
      },
    }),
  },
  textInput: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    letterSpacing: 1,
  },
  temperatureText: {
    fontSize: 54,
    fontWeight: 'bold',
    color: '#FFD600',
    textShadowColor: '#1E40AF',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
    textAlign: 'center',
    fontFamily:
      Platform.OS === 'ios' ? 'AvenirNext-Bold' : 'sans-serif-condensed',
  },
});

export default App;
