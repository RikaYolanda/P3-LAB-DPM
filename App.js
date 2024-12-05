import React from 'react';
import { StyleSheet, View } from 'react-native';
import MoodTrackerScreen from './src/screens/MoodTrackerScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <MoodTrackerScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});