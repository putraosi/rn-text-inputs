import React, {useEffect, useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import {InputCode} from '.';
import {useForm} from '../utils';

const InputDigitCode = ({onChangeText, isInputError}) => {
  const refInput1 = useRef();
  const refInput2 = useRef();
  const refInput3 = useRef();
  const refInput4 = useRef();
  const refInput5 = useRef();
  const refInput6 = useRef();
  
  const [form, setForm] = useForm({
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    input5: '',
    input6: '',
  });

  useEffect(() => {
    refInput1.current.focus();
  }, []);

  const onChangeText1 = _value => {
    if (_value) refInput2.current.focus();
    setForm('input1', _value);
    onChangeText(
      _value +
        form.input2 +
        form.input3 +
        form.input4 +
        form.input5 +
        form.input6,
    );
  };

  const onChangeText2 = _value => {
    if (_value) refInput3.current.focus();
    else refInput1.current.focus();
    setForm('input2', _value);
    onChangeText(
      form.input1 +
        _value +
        form.input3 +
        form.input4 +
        form.input5 +
        form.input6,
    );
  };

  const onChangeText3 = _value => {
    if (_value) refInput4.current.focus();
    else refInput2.current.focus();
    setForm('input3', _value);
    onChangeText(
      form.input1 +
        form.input2 +
        _value +
        form.input4 +
        form.input5 +
        form.input6,
    );
  };

  const onChangeText4 = _value => {
    if (_value) refInput5.current.focus();
    else refInput3.current.focus();

    setForm('input4', _value);
    onChangeText(
      form.input1 +
        form.input2 +
        form.input3 +
        _value +
        form.input5 +
        form.input6,
    );
  };

  const onChangeText5 = _value => {
    if (_value) refInput6.current.focus();
    else refInput4.current.focus();
    setForm('input5', _value);
    onChangeText(
      form.input1 +
        form.input2 +
        form.input3 +
        form.input4 +
        _value +
        form.input6,
    );
  };

  const onChangeText6 = _value => {
    if (!_value) refInput5.current.focus();

    setForm('input6', _value);
    onChangeText(
      form.input1 +
        form.input2 +
        form.input3 +
        form.input4 +
        form.input5 +
        _value,
    );
  };

  return (
    <View style={styles.container}>
      <InputCode
        refs={refInput1}
        value={form.input1}
        onSubmitEditing={() => {
          refInput2.current.focus();
        }}
        onChangeText={onChangeText1}
        isInputError={isInputError}
      />

      <InputCode
        refs={refInput2}
        value={form.input2}
        onChangeText={onChangeText2}
        isInputError={isInputError}
      />

      <InputCode
        refs={refInput3}
        value={form.input3}
        onChangeText={onChangeText3}
        isInputError={isInputError}
      />

      <InputCode
        refs={refInput4}
        value={form.input4}
        onChangeText={onChangeText4}
        isInputError={isInputError}
      />

      <InputCode
        refs={refInput5}
        value={form.input5}
        onChangeText={onChangeText5}
        isInputError={isInputError}
      />

      <InputCode
        refs={refInput6}
        value={form.input6}
        onChangeText={onChangeText6}
        isInputError={isInputError}
      />
    </View>
  );
};

export default InputDigitCode;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
