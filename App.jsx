import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  TextInput,
  Text,
} from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

function App() {
  return (
    <View style={styles.container}>
      {/* Background Image */}

      <Image
        source={require('./images/weather.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      {/* Text Input */}
      <TextInput
        placeholder="Enter City"
        placeholderTextColor="#888"
        style={styles.textInput}
      />
      <Text style={styles.text}>0 C°</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  backgroundImage: {
    alignItems: 'stretch',
    width: deviceWidth,
    height: deviceHeight,
  },
  textInput: {
    color: '#000000',
    position: 'absolute',
    backgroundColor: '#fff',
    borderRadius: 10,
    width: 250,
    margin: 10,
  },
  text: {
    color: '#FFFF00',
    position: 'absolute',
    fontSize: 30,
    marginTop: 200,
  },
});

export default App;
