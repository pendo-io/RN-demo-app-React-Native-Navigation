import * as React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import {Navigation} from 'react-native-navigation';
import Login from './components/Login';
import {PendoSDK, NavigationLibraryType} from 'rn-pendo-sdk';

Navigation.events().registerAppLaunchedListener(() => {
    const navigationOptions = {library: NavigationLibraryType.ReactNativeNavigation, navigation: Navigation};
    const pendoKey = 'YOUR-APP-KEY';

    PendoSDK.setup(pendoKey, navigationOptions, options);
});

export default function App(props) {

  function handlePress() {
    Navigation.push(props.componentId, {
      component: {
        name: 'Login',
      },
    });
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./img/logo.png')}
      />
      <Text style={styles.title} onPress={() => handlePress()}>Click here to start app!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: '#2f3641',
  },
  logo : {
    alignSelf: 'center',
    width: 250,
    height: 150
  },
  title : {
    position: 'absolute',
    bottom: 30,
    color: '#ec2059',
    fontSize: 25,
    fontWeight: '400',
    alignSelf: 'center',
  },
  
})
