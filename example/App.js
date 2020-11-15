import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import Home from './home';
import ListView from './listView';
import createStore from './create-store';

const store = createStore();

var routeName;

const Stack = createStackNavigator();
const App = (initCfg) => {
  console.warn(initCfg.initCfg);
  if (initCfg.initCfg === 1) {
    console.warn('route name listview');
    routeName = 'ListView';
  } else {
    routeName = 'Home';
  }

  //below is an if that checks if the app should render a preview component or render the main app navigation.

  if (initCfg.initCfg === 1) {
    return (
      <Provider store={store}>
        <ListView />
      </Provider>
    );
  } else {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={routeName}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="listView" component={ListView} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
};

export default App;
