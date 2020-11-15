
///// this is not implimented correctly. i just updated listview to test the concept. 


import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

const previewView = () => {
  const counter = useSelector((state) => state.value);

  return (
    <SafeAreaView style={styles.container}>
      <Text>{`Counter from redux: ${counter}`}</Text>
      <Text>
        Hello World I am a React View used as a preview for a context action :-)
      </Text>
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

export default previewView;
