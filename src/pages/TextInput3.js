import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { FloatingInput, FloatingInputSecond, Gap } from '../component';

const TextInput3 = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const onChangeTextEmail = value => {
    setEmail(value);
  };

  const onChangeTextPassword = value => {
    setPassword(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{'Floating Input 2nd'}</Text>

      <FloatingInputSecond
        value={email}
        label={'Email'}
        autoCapitalize="none"
        onChangeText={onChangeTextEmail}
      />

      <Gap height={16} />
      <FloatingInputSecond
        type={'password'}
        value={password}
        label={'Password'}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeTextPassword}
        onTogglePassword={() => setSecureTextEntry(!secureTextEntry)}
      />
    </View>
  );
};

export default TextInput3;

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
