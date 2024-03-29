import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Training4 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.taskBar} onPress={() => navigation.navigate('Four')}>
        <Text style={styles.taskText}>PLAN</Text>
        <Image source={require('../assets/Image/Women_P-removebg-preview.png')} style={styles.taskImage} />
      </TouchableOpacity>

      <ImageBackground
        source={require('../assets/Image/GYM3.jpg')}
        style={styles.overlayContainer}
      >
        <View style={styles.headerContainer}>
          <Text style={[styles.textContainer, styles.headerText]}>FULL- BODY WEIGHT{'\n'}
LOSS</Text>
          <Text style={[styles.textContainer, styles.subHeaderText, styles.bottomText]}>29 DAYS</Text>
        </View>
      </ImageBackground>

      <ScrollView style={styles.daysContainer}> 
        {[...Array(29)].map((_, index) => (
          <View key={index} style={styles.dayContainer}>
            <Text style={styles.dayText}>DAY {index + 1}</Text>
            <Text style={styles.statusText}>OPEN</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.footerItem}>
          <Image source={require('../assets/Image/Training.png')} style={styles.footerImage} />
          <Text style={styles.footerText}>Training</Text>
        </View>
        <View style={styles.footerItem}>
          <Image source={require('../assets/Image/Reports.png')} style={styles.footerImage} />
          <Text style={styles.footerText}>Reports</Text>
        </View>
        <View style={styles.footerItem}>
          <Image source={require('../assets/Image/user.png')} style={styles.footerImage} />
          <Text style={styles.footerText}>User</Text>
        </View>
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
    alignItems: 'flex-end',
    padding: 16,
    paddingBottom: 20,
  },
  textContainer: {
    color: '#F620C7',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 90,
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
    padding: 20,
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  taskText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  taskImage: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },
 
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  footerItem: {
    alignItems: 'center',
  },
  footerText: {
    color: 'black',
    fontSize: 16,
  },
  footerImage: {
    width: 40,
    height: 40,
    marginBottom: 5,
    borderRadius: 45,
  },
});

export default Training4;
