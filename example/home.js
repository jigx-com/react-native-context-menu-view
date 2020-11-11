import React, {useState} from 'react';
import {SafeAreaView, View, StyleSheet, AppRegistry} from 'react-native';
import ContextMenu from 'react-native-context-menu-view';
import listView from './listView';

AppRegistry.registerComponent('listView', () => listView);

const Home = ({navigation}) => {
  const [color, setColor] = useState('blue');

  return (
    <SafeAreaView style={styles.container}>
      <ContextMenu
        title={'Set Color'}
        //comment out the line below to not use a custom preview view
        previewController={'listView'}
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
            navigation.navigate('listView');
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
