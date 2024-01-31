import React from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native';

const Training1 = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/Image/gym1.jpg')} // Adjust the path based on your project structure
        style={styles.overlayContainer}
      >
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>STRONG & LEAN</Text>
          <Text style={styles.subHeaderText}>BODY BUILDING</Text>
          <Text style={styles.subHeaderText}>30 DAYS</Text>
        </View>
      </ImageBackground>

      <ScrollView style={styles.daysContainer}>
        {[...Array(30)].map((_, index) => (
          <View key={index} style={styles.dayContainer}>
            <Text style={styles.dayText}>DAY {index + 1}</Text>
            <Text style={styles.statusText}>OPEN</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlayContainer: {
    borderRadius: 30,
    margin: 35,
    marginTop: 133,
    width: 360,
    height: 185,
    overflow: 'hidden',
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white', // Set the text color to be visible on the background
  },
  subHeaderText: {
    fontSize: 18,
    marginBottom: 10,
    color: 'white', // Set the text color to be visible on the background
  },
  daysContainer: {
    marginTop: 16,
    padding: 16,
  },
  dayContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 8,
  },
  dayText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white', // Set the text color to be visible on the background
  },
  statusText: {
    fontSize: 16,
    color: 'white', // Set the text color to be visible on the background
  },
});

export default Training1;
