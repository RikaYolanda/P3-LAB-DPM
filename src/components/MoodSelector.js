import React from 'react';
import { View, StyleSheet } from 'react-native';
import MoodItem from './MoodItem';

const moods = [
  { emoji: '😊', label: 'Senang' },
  { emoji: '😢', label: 'Sedih' },
  { emoji: '😡', label: 'Marah' },
  { emoji: '😴', label: 'Lelah' },
  { emoji: '😍', label: 'Bahagia' },
];

const MoodSelector = ({ onSelectMood }) => {
  return (
    <View style={styles.moodContainer}>
      {moods.map((mood) => (
        <MoodItem key={mood.label} mood={mood} onPress={onSelectMood} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  moodContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
});

export default MoodSelector;