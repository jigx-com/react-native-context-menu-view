import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import Home from './home';
import listView from './listView';
import createStore from './create-store';

const store = createStore();

const Stack = createStackNavigator();
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="listView" component={listView} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
