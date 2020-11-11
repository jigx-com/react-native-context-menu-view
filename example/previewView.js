import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

const previewView = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello World I am a React View used as a preview for a context action :-)</Text>
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