import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import LottieSplashScreen from 'react-native-lottie-splash-screen';
import Routes from './src/Routes';

const App = () => {
  useEffect(() => {
    LottieSplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
};

export default App;
