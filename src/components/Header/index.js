import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Catatanku</Text>
      <View style={styles.underLine} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 30,
    paddingTop: 13,
    backgroundColor:'#29839F'
  },
  headerText: {
    fontSize: 20,
    marginBottom: 6,
    fontWeight: 'bold',
    color: 'white',
  },
  underLine: {
    marginTop: 8,
  },
});
