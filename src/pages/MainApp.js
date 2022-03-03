import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const MainApp = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{'Bottom Navigator'}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('TextInput1')}>
        <Text style={styles.label}>{'Floating Input 1st'}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('TextInput3')}>
        <Text style={styles.label}>{'Floating Input 2nd'}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('TextInput2')}>
        <Text style={styles.label}>{'Verification Code'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MainApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#ffffff',
  },

  title: {
    fontSize: 20,
    color: '#282828',
    fontWeight: '700',
    marginBottom: 10,
    textAlign: 'center',
  },

  button: {
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#282828',
    borderRadius: 8,
    backgroundColor: '#ffffff',
    marginTop: 16,
  },

  label: {
    fontSize: 16,
    color: '#282828',
    fontWeight: '500',
    textAlign: 'center',
  },
});
