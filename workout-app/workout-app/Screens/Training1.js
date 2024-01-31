import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Training1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.taskBar} onPress={() => navigation.navigate('Two')}>
        <Text style={styles.taskText}>Task Bar Content</Text>
      </TouchableOpacity>

      <ImageBackground
        source={require('../assets/Image/gym1.jpg')}
        style={styles.overlayContainer}
      >
        <View style={styles.headerContainer}>
          <Text style={[styles.textContainer, styles.headerText]}>STRONG & LEAN</Text>
          <Text style={[styles.textContainer, styles.subHeaderText]}>BODY BUILDING</Text>
          <Text style={[styles.textContainer, styles.subHeaderText, styles.bottomText]}>30 DAYS</Text>
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

  
      <View style={styles.footer}>
        <Text style={styles.footerText}>Footer Content</Text>
      </View>
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
    width: 360,
    height: 185,
    overflow: 'hidden',
  },
  headerContainer: {
    flex: 1,
    alignItems: 'flex-start',
    padding: 16,
    paddingBottom: 20,
  },
  textContainer: {
    color: 'white',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subHeaderText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 75,
  },
  bottomText: {
    fontSize: 18,
    marginBottom: 0,
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
    marginBottom: 25,
  },
  dayText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ED1DBF',
  },
  statusText: {
    fontSize: 16,
    color: '#ED1DBF',
  },

  taskBar: {
    backgroundColor: 'blue',
    padding: 20,
    marginTop: 25,
    alignItems: 'center',
  },
  taskText: {
    color: 'white',
    fontSize: 16,
  },
 
  footer: {
    backgroundColor: 'green',
    padding: 20,
    alignItems: 'center',
  },
  footerText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Training1;
