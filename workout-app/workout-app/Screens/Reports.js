import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

const Reports = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const onDayPress = (day) => {
    // Handle the selected date
    setSelectedDate(day.dateString);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Reports</Text>
      </View>
      <View style={styles.calendarContainer}>
        <Calendar
          onDayPress={onDayPress}
          markedDates={{
            [selectedDate]: {
              selected: true,
              selectedColor: 'blue',
            },
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  header: {
    padding: 20,
    backgroundColor: '#f0f0f0',
    alignItems: 'flex-start',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  calendarContainer: {
    padding: 20,
    
  },
});

export default Reports;
