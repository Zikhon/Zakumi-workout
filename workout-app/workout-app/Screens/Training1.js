import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

const Training1 = () => {
  return (
    <ImageBackground
      source={require('../assets/Image/gym1.jpg')} // Replace with the path to your image
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.headerText}>STRONG & LEAN</Text>
        <Text style={styles.subHeaderText}>BODY BUILDING</Text>
        <Text style={styles.subHeaderText}>30 DAYS</Text>

        {[...Array(30)].map((_, index) => (
          <View key={index} style={styles.dayContainer}>
            <Text style={styles.dayText}>DAY {index + 1}</Text>
            <Text style={styles.statusText}>OPEN</Text>
          </View>
        ))}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' as per your preference
  },
  container: {
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
