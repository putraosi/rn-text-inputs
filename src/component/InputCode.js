import React, {useEffect, useState} from 'react';
import {Animated, Easing, StyleSheet, TextInput} from 'react-native';

const InputCode = ({
  refs,
  value,
  isInputError,
  onChangeText,
  onSubmitEditing,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [animated] = useState(new Animated.Value(value === '' ? 0 : 1));
  const [color, setColor] = useState('#282828');

  useEffect(() => {
    animatedFocus();
  }, [isFocused, isInputError]);

  const animatedFocus = () => {
    if (isInputError) setColor('#EA232A');
    else if (isFocused) setColor('#1D8AF5');
    else setColor('#868686');

    Animated.timing(animated, {
      toValue: value !== '' || isFocused ? 1 : 0,
      duration: 300,
      easing: Easing.linear,
    }).start();
  };

  const handleFocus = () => setIsFocused(true);

  const handleBlur = () => setIsFocused(false);

  return (
    <TextInput
      ref={refs}
      style={styles.input(color)}
      value={value}
      onChangeText={onChangeText}
      numberOfLines={1}
      maxLength={1}
      keyboardType={'numeric'}
      returnKeyType={'next'}
      onSubmitEditing={onSubmitEditing}
      blurOnSubmit={false}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
};

export default InputCode;

const styles = StyleSheet.create({
  input: color => ({
    width: 44,
    height: 44,
    textAlign: 'center',
    color: '#282828',
    fontSize: 24,
    backgroundColor: '#fff',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: color,
    padding: 0,
    margin: 0,
    marginHorizontal: 8,
  }),
});
