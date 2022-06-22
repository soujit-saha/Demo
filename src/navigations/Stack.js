import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Onbording from '../screen/Onbording';
import Login from '../screen/Login';
import Signup from '../screen/Signup';
import Verify from '../screen/Verify';
import ForgotPs from '../screen/ForgotPs';
import ResetPs from '../screen/ResetPs';
import Hours from '../screen/Hours';
import Confirm from '../screen/Confirm';
import Verification from '../screen/Verification';
import Info from '../screen/Info';

export default function Stack() {
  const StackNav = createStackNavigator();
  return (
    <NavigationContainer>
      <StackNav.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="OnBoarding">
        <StackNav.Screen name="OnBoarding" component={Onbording} />
        <StackNav.Screen name="Login" component={Login} />
        <StackNav.Screen name="Signup" component={Signup} />
        <StackNav.Screen name="Verify" component={Verify} />
        <StackNav.Screen name="Reset" component={ResetPs} />
        <StackNav.Screen name="Forgot" component={ForgotPs} />
        <StackNav.Screen name="Info" component={Info} />
        <StackNav.Screen name="Verification" component={Verification} />
        <StackNav.Screen name="Hours" component={Hours} />
        <StackNav.Screen name="Confirm" component={Confirm} />
      </StackNav.Navigator>
    </NavigationContainer>
  );
}
