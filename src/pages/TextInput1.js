import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Gap} from '../component';
import FloatingInput from '../component/FloatingInput';
import {rupiah} from '../helpers/rupiah';

const TextInput1 = () => {
  const [fullname, setFullname] = useState('');
  const [price, setPrice] = useState('');
  const [isInputError, setIsInputError] = useState(false);
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const regexNumberOnly = /^\d+$/;
  const regexPhoneNumber = /\D/g;

  const onChangePrice = async value => {
    if (!value) setPrice('');
    const _price = await value.replaceAll('.', '');

    if (regexNumberOnly.test(_price)) {
      setPrice(_price);
    }
  };

  let labelError = '';

  if (error == 'empty') {
    labelError = 'Please enter your registered phone number.';
  } else if (error == 'invalid') {
    labelError = 'Please enter your valid phone number.';
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{'Floating Input 1st'}</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        <FloatingInput
          label={'Full name'}
          value={fullname}
          onChangeText={value => setFullname(value)}
        />

        <Gap height={16} />
        <FloatingInput
          label={'Phone number'}
          type={'phone'}
          keyboardType={'numeric'}
          value={phone}
          isInputError={isInputError}
          labelError={labelError}
          onChangeText={value => {
            let newValue = value.replace(regexPhoneNumber, '');
            if (
              value &&
              (value.substring(0, 1) == '0' || value.substring(0, 2) == '62')
            )
              newValue = '';

            setPhone(newValue);
            setIsInputError(false);
            setError('');
          }}
        />

        <Gap height={16} />
        <FloatingInput
          label={'Price'}
          value={rupiah(price)}
          keyboardType={'numeric'}
          onChangeText={onChangePrice}
        />
      </ScrollView>
    </View>
  );
};

export default TextInput1;

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
