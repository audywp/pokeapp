import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import LottieSplashScreen from 'react-native-lottie-splash-screen';
import {COLOR} from './src/config/color';
import {navigationRef} from './src/helpers/navigation';
import Routes from './src/Routes';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLOR.primary,
  },
};

const App = () => {
  useEffect(() => {
    LottieSplashScreen.hide();
  }, []);
  return (
    <NavigationContainer ref={navigationRef} theme={MyTheme}>
      <Routes />
    </NavigationContainer>
  );
};

export default App;
