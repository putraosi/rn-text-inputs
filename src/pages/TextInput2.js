import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {InputDigitCode} from '../component';

const TextInput2 = () => {
  const [code, setCode] = useState('');
  const [isInputError, setIsInputError] = useState(false);
  const [error, setError] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{'Verification Code'}</Text>

      <InputDigitCode
        isInputError={isInputError}
        onChangeText={value => {
          setIsInputError(false);
          setError('');

          if (value.length == 6) setCode(value);
        }}
      />
    </View>
  );
};

export default TextInput2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 16,
  },

  title: {
    fontSize: 20,
    color: '#282828',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 16,
  },
});
