import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const MoodItem = ({ mood, onPress }) => (
  <TouchableOpacity onPress={() => onPress(mood)}>
    <View style={styles.moodItem}>
      <Text style={styles.moodText}>{mood.emoji}</Text>
      <Text style={styles.moodLabel}>{mood.label}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  moodItem: {
    alignItems: 'center',
    margin: 10,
  },
  moodText: {
    fontSize: 40,
  },
  moodLabel: {
    fontSize: 14,
    marginTop: 5,
    color: '#555',
  },
});

export default MoodItem;