import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Calendar } from 'react-native-calendars';

const Reports = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const onDayPress = (day) => {
    // Handle the selected date
    setSelectedDate(day.dateString);
  };

  return (
    <View>
      <Text>Reports</Text>
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
  );
};

export default Reports;
