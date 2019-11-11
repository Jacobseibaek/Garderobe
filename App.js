import * as React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

// You can import from local files
import HomeScreen from './components/HomeScreen';
import Pickup from './components/Pickup';
import Delivery from './components/Delivery';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

function getTabBarIcon(routeName, color) {
  switch (routeName) {
    case 'HomeScreen':
      return (
        <Image
          /* Bemærk at style her er pakket ind i [ ]. Det vil sige et array (list) af styles. 
          Først angiver vi den generelle style til et tabIcon og dernæst en custom style til den
          color vi får med. Sidste style i listen overruler de forrige. */ 
          style={[styles.tabIcon, { tintColor: color }]}
          // Der er problemer med @expo/vector-icons i de seneste versioner af expo.
          // Derfor har jeg fundet nogle PNG ikoner og lagt dem i assets-mappen.
          source={require('./assets/snack-icon.png.png')}
        />
      );
    case 'Delivery':
      return (
        <Image
          style={[styles.tabIcon, { tintColor: color }]}
          source={require('./assets/hanger.png')}
        />
      );
      case 'Pickup':
      return (
        <Image
          style={[styles.tabIcon, { tintColor: color }]}
          source={require('./assets/hanger.png')}
        />
      );
    default:
      return null;
  }
}

// Denne TabNavigator holder styr på det yderste niveau af navigation i appen.
const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Delivery: Delivery,
    Pickup: Pickup,
  },
  {
    /* I defaultNavigationOptions definerer vi en funktion der returnerer en konfiguration
    til TabNavigator. Som argument modtager funktionen et objekt, der blandt andet
    indeholder feltet "navigation". Det pakker vi ud med ved at angive det inden i { }
    således at det er tilængeligt som variabel. */
    defaultNavigationOptions: ({ navigation }) => {
      // Vi returnerer nu en konfiguration, som er et objekt, hvor vi sætter tabBarIcon.
      return {
        /* Her definerer vi en funktion som modtager et object, hvorfra vi pakker
        tintColor ud. Denne farve bruges på knappen og skifter hvis den er aktiv. */
        tabBarIcon: ({ tintColor }) => {
          // Vi kalder en funktion, der giver os et ikon ud fra den aktive route.
          return getTabBarIcon(navigation.state.routeName, tintColor);
        },
      };
    },
  }
);
/*export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Velkommen til Garderobe app'en!
        </Text>
        <Card>
          <HomeScreen />
        </Card>
      </View>
    );
  }
}*/
export default createAppContainer(TabNavigator);

// Den oprindelige komponent er nu fjernet og erstattet af en komponent som genereres af createAppContainer()

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tabIcon: {
    width: 30,
    height: 30,
  },
});