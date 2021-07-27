import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

const BtnIcon = ({icon, color, size, onPress}) => {
  return (
    <TouchableOpacity style={styles.border} onPress={onPress}>
      <FontAwesomeIcon
        style={styles.icon}
        icon={icon}
        color={color}
        size={size}
      />
    </TouchableOpacity>
  );
};

export default BtnIcon;

const styles = StyleSheet.create({
  border: {
    padding: 10,
  },
});
