import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const BtnGrup = ({label, onPress}) => {
  return (
    <TouchableOpacity style={styles.btnSubmit} onPress={onPress}>
      <Text style={styles.labelBtn}>{label}</Text>
    </TouchableOpacity>
  );
};

export default BtnGrup;

const styles = StyleSheet.create({
  btnSubmit: {
    backgroundColor: '#29839F',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  labelBtn: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
});
