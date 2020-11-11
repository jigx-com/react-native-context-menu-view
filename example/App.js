import React from 'react';
import {AppRegistry} from 'react-native';
import listView from './listView';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './home';

AppRegistry.registerComponent('listView', () => listView);
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="listView" component={listView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
