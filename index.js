import { Navigation } from "react-native-navigation";
import App from "./App";
import Login from "./components/Login";
import Plan from "./components/Plan";

Navigation.registerComponent('StartApp', () => App);
Navigation.registerComponent('Login', () => Login);
Navigation.registerComponent('Plan', () => Plan);

Navigation.events().registerAppLaunchedListener(() => {
   Navigation.setRoot({
     root: {
       stack: {
         children: [
           {
             component: {
               name: 'StartApp'
             }
           }
         ]
       }
     }
  });
});

Navigation.setDefaultOptions({
  topBar: {
    height: 0,
    backButton: {
      visible: false
    }
  },
  bottomTab: {
    fontSize: 14,
    selectedFontSize: 14
  }
});