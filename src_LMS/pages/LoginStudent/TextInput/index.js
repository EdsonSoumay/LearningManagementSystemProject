import React from 'react';
import {StyleSheet, Text, View, TextInput as Input} from 'react-native';

const TextInput = ({label, placeholder, value, ...rest}) => {
  return (
    <View>
      <Text style={styles.labelInput}>{label}</Text>
      <Input style={styles.input} placeholder={placeholder} value ={value} {...rest} />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  labelInput: {
    fontSize: 18,
  },
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    paddingLeft: 16,
    paddingVertical: 12,
    marginTop: 5,
  },
});