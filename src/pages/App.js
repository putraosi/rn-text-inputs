import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import {rupiah} from '../helpers/rupiah';

const App = () => {
  const [price, setPrice] = useState('');

  const onChangeText = async value => {
    if (!value) setPrice('');
    const regex = /^\d+$/;
    const _price = await value.replaceAll('.', '');

    if (regex.test(_price)) {
      setPrice(_price);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{'Text Input'}</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.label}>{'Currency'}</Text>

        <TextInput
          style={styles.input}
          value={rupiah(price)}
          onChangeText={onChangeText}
        />
      </ScrollView>
    </View>
  );
};

export default App;

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

  label: {
    fontSize: 14,
    color: '#282828',
    fontWeight: '700',
  },

  input: {
    borderWidth: 1,
    borderColor: '#43c351',
    borderRadius: 8,
    marginTop: 4,
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#282828',
  },
});
