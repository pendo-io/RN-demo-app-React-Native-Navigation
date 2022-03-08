import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Button,
} from 'react-native';
import React from 'react';
import {Navigation} from 'react-native-navigation';
import {PendoSDK, NavigationLibraryType} from 'rn-pendo-sdk';

// Navigation.events().registerAppLaunchedListener(() => {
//     const navigationOptions = {library: NavigationLibraryType.ReactNativeNavigation, navigation: Navigation};
//     const pendoKey = 'YOUR-APP-KEY';

//     PendoSDK.setup(pendoKey,navigationOptions);
// });

export default function Login(props) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isLoggedIn, setLoggedin] = React.useState(true);

  function handleLogin() {
    // ...
    // Your authentication logic here
    // ...
    // For demo purposes, we will skip this part
    // ...

    if (isLoggedIn) {
      // Your visitor is identified -> initialize Pendo
      const visitorId = 'VISITOR-UNIQUE-ID';
      const accountId = 'ACCOUNT-UNIQUE-ID';
      const visitorData = {Age: '25', Country: 'USA'}; // example data
      const accountData = {Tier: '1', Size: 'Enterprise'}; // example data

      PendoSDK.startSession(visitorId, accountId, visitorData, accountData);

      Navigation.push(props.componentId, {
        component: {
          name: 'Plan',
        },
      });
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <SafeAreaView style={styles.form}>
        <TextInput
          style={styles.input}
          onChangeText={text => setUsername(text)}
          value={username}
          placeholder="Username"
        />
        <TextInput
          style={styles.input}
          onChangeText={text => setPassword(text)}
          value={password}
          placeholder="Password"
          secureTextEntry={true}
        />
        <View style={styles.buttonWrapper}>
          <Button onPress={handleLogin} title="login" color="#ec2059" />
        </View>
      </SafeAreaView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2f3641',
  },
  title: {
    color: '#ec2059',
    fontSize: 25,
    fontWeight: 'bold',
    padding: 40,
    alignSelf: 'center',
  },
  form: {
    padding: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#fff',
    padding: 10,
  },
  buttonWrapper: {
    paddingTop: 25,
    paddingHorizontal: 135,
  },
});