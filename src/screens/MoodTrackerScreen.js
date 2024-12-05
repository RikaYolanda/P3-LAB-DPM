import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';
import MoodSelector from '../components/MoodSelector';

const MoodTrackerScreen = () => {
  const [moodHistory, setMoodHistory] = useState([]);

  const handleMoodSelect = (mood) => {
    const today = new Date().toLocaleDateString();
    if (moodHistory.some((entry) => entry.date === today)) {
      Alert.alert('Oops!', 'Kamu sudah mencatat suasana hati hari ini.');
    } else {
      setMoodHistory((prev) => [...prev, { ...mood, date: today }]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pelacak Suasana Hati</Text>
      <MoodSelector onSelectMood={handleMoodSelect} />
      <Text style={styles.historyTitle}>Riwayat Suasana Hati</Text>
      <FlatList
        data={moodHistory}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.historyItem}>
            <Text style={styles.historyText}>
              {item.date}: {item.emoji} {item.label}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#FFF7F1',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF69B4',
    textAlign: 'center',
  },
  historyTitle: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#555',
  },
  historyItem: {
    padding: 10,
    backgroundColor: '#FFB6C1',
    borderRadius: 5,
    marginVertical: 5,
  },
  historyText: {
    fontSize: 16,
    color: '#333',
  },
});

export default MoodTrackerScreen;