# Pendo Demo app (React Native & React Native Navigation)
This project is aimed at providing information on how to integrate the Pendo SDK with React Native applications,   
in particular those developed with React Native Navigation.

Here's a sample To-Do app to show how the Pendo SDK can be integrated into any app.

## To-Do app: Project Description
In the sample app you will be able to:

1. Login into the app (No real authentication mechanism is present as it is not necessary for the purpose of this project - any username and password will "log" you into the app).
<img src="https://user-images.githubusercontent.com/93860419/158052631-7361eee6-e0f6-418f-aab2-a574bbc73847.gif" width="180" height="380"/>

2. Add new tasks.
<img src="https://user-images.githubusercontent.com/93860419/158052795-9486e947-e93f-441c-ae20-bc8d99a2ec42.gif" width="180" height="380"/>

3. Remove tasks (Tapping on an existing task will remove it).
<img src="https://user-images.githubusercontent.com/93860419/158052886-66dfef30-5c15-4c88-b947-21f49b0e352c.gif" width="180" height="380"/>

## Pendo SDK integration 

In this section you will be presented with the actual steps taken to integrate the Pendo SDK into the example To-Do app.

### Pendo SDK integration - Android:

1. In the application folder, run the following commands:
```
npm install --save rn-pendo-sdk
```
or
```
yarn add rn-pendo-sdk
```

2. In the application build.gradle file.     
Add Pendo Repository to the repositories section:  

(build.gradle lines 41-44)
```
        maven {
          url "https://software.mobile.pendo.io/artifactory/androidx-release"
        }
        mavenCentral()
```

3. In the application Android.manifest file.  
If applicable, add the following <uses-permission> to the manifest in the <manifest> tag:
  
(Android.manifest lines 4-5)
```
    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>
```

4. In the application metro.config.js.  
Add the following statements in the transformer:
  
(metro.config.js lines 16-23)
```
  minifierConfig: {
      keep_classnames: true, // Preserve class names
      keep_fnames: true, // Preserve function names
      mangle: {
        keep_classnames: true, // Preserve class names
        keep_fnames: true, // Preserve function names
      }
    }
```
5. Add the following ```<activity>``` to the manifest in the ```<application>``` tag:  
**IMPORTANT**: don't forget to replace ```"YOUR-APP-SCHEME"``` with your own app scheme. 
  
(Android.manifest lines 25-32)
```
      <activity android:name="sdk.pendo.io.activities.PendoGateActivity" android:launchMode="singleInstance">
        <intent-filter>
          <action android:name="android.intent.action.VIEW"/>
          <category android:name="android.intent.category.DEFAULT"/>
          <category android:name="android.intent.category.BROWSABLE"/>
          <data android:scheme="YOUR-APP-SCHEME"/>
        </intent-filter>
      </activity>
```
6. In the application main file (App.js), add the following code:  
**IMPORTANT**: don't forget to replace ```'YOUR-APP-KEY'``` with your own app key. 
  
(App.js lines 5-12)
```
import {PendoSDK, NavigationLibraryType} from 'rn-pendo-sdk';

Navigation.events().registerAppLaunchedListener(() => {
    const navigationOptions = {library: NavigationLibraryType.ReactNativeNavigation, navigation: Navigation};
    const pendoKey = 'YOUR-APP-KEY';

    PendoSDK.setup(pendoKey, navigationOptions);
});
```
  
7. Initialize Pendo where your visitor is being identified (e.g. login, register, etc.).  
**IMPORTANT**: The following is an example of a possible user or "visitor" logging into your application.  
Passing null or "" to the visitorId will generate an anonymous visitor id.

(Login.js 34-39)
```
      const visitorId = 'VISITOR-UNIQUE-ID';
      const accountId = 'ACCOUNT-UNIQUE-ID';
      const visitorData = {Age: '25', Country: 'USA'}; // example data
      const accountData = {Tier: '1', Size: 'Enterprise'}; // example data

      PendoSDK.startSession(visitorId, accountId, visitorData, accountData);
```
## Questions 
You can notify us of any issues under the issues tab.
