import React from 'react';
import {StyleSheet, Text, TextInput} from 'react-native';

const InputEdit = ({
  label,
  isTextArea,
  keyType,
  onChangeText,
  value,
  namaState,
}) => {
  if (isTextArea) {
    return (
      <>
        <Text style={styles.label}>{label}</Text>
        <TextInput
          multiline={true}
          numberOfLines={4}
          style={styles.inputArea}
          keyboardType={keyType}
          onChangeText={text => onChangeText(namaState, text)}
          value={value}
        />
      </>
    );
  }

  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        keyboardType={keyType}
        onChangeText={text => onChangeText(namaState, text)}
        value={value}
      />
    </>
  );
};

export default InputEdit;

const styles = StyleSheet.create({
  label: {
    fontSize: 24,
    marginBottom: 5,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
    height: 60,
  },
  inputArea: {
    textAlignVertical: 'top',
    borderBottomWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
    height: 180,
  },
});
