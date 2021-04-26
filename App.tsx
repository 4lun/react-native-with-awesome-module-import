/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import AwesomeModule from 'react-native-awesome-module';

import {getStorybookUI} from '@storybook/react-native';
getStorybookUI({});

const App = () => {
  const [result, setResult] = useState(0);

  useEffect(() => {
    (async () => {
      const resp = await AwesomeModule.multiply(
        Math.random() * 100,
        Math.random() * 100,
      );
      setResult(resp);
    })();
  }, [setResult]);

  return (
    <SafeAreaView>
      <Text style={styles.text}>Result: {result}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    padding: 30,
  },
});

export default App;
