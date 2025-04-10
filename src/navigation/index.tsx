import React, { useState } from 'react';
import { View } from 'react-native';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import StartScreen from '../screens/StartScreen';
import MainScreen from '../screens/MainScreen';

const AppNavigator = () => {
  const [currentScreen, setCurrentScreen] = useState<'Start' | 'Login' | 'SignUp' | 'Main'>('Start');

  const navigate = (screen: 'Start' | 'Login' | 'SignUp' | 'Main') => {
    setCurrentScreen(screen);
  };

  return (
    <View style={{ flex: 1 }}>
      {currentScreen === 'Start' && <StartScreen navigate={navigate} />}
      {currentScreen === 'Login' && <LoginScreen navigate={navigate} />}
      {currentScreen === 'SignUp' && <SignUpScreen navigate={navigate} />}
      {currentScreen === 'Main' && <MainScreen navigate={navigate} />}
    </View>
  );
};

export default AppNavigator;