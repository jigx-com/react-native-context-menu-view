import React, {useState} from 'react';
import {SafeAreaView, View, StyleSheet, AppRegistry, Text} from 'react-native';
import ContextMenu from 'react-native-context-menu-view';
import {useSelector} from 'react-redux';
//import listView from './listView';

//AppRegistry.registerComponent('listView', () => listView);

const Home = ({navigation}) => {
  const [color, setColor] = useState('blue');
  const counter = useSelector((state) => state.value);

  return (
    <SafeAreaView style={styles.container}>
      <Text>{`Counter from redux : ${counter}`}</Text>
      <ContextMenu
        title={'Set Color'}
        //preview controller uses the main view that is wrapped in redux. then in that view you determine what to render to keep the redux state in place
        previewController={'example'} //example is the name of the app's main view
        previewControllerHeight={300}
        previewControllerProperties={{
          initCfg: 1,
        }}
        actions={[
          {
            title: 'blue',
            systemIcon: color === 'blue' ? 'paintbrush.fill' : 'paintbrush',
          },
          {
            title: 'red',
            systemIcon: color === 'red' ? 'paintbrush.fill' : 'paintbrush',
          },
          {
            title: 'transparent',
            systemIcon: 'trash',
            destructive: true,
          },
          {
            title: 'disabled item',
            disabled: true,
          },
        ]}
        onPress={(event) => {
          console.warn(event.nativeEvent.name);
          if (event.nativeEvent.name === 'preview') {
            navigation.navigate('listView', {
              initCfg: 1,
            });
          } else {
            setColor(event.nativeEvent.name);
          }
        }}
        onCancel={() => {
          console.warn('CANCELLED');
        }}>
        <View style={[styles.rectangle, {backgroundColor: color}]} />
      </ContextMenu>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rectangle: {
    width: 200,
    height: 200,
  },
});

export default Home;
