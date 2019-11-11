import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class Pickup extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/hanger.png')} />
        <Text style={styles.paragraph}>
          Pickup
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 350,
    width: 350,
  }
});
