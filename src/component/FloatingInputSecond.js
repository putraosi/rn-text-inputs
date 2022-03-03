import React, {useEffect, useState} from 'react';
import {
  Animated,
  Easing,
  Image,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {IcHidePassword, IcShowPassword} from '../assets';

const os = Platform.OS;

const AnimatedText = Animated.createAnimatedComponent(Text);

const FloatingInput = ({
  type,
  value,
  autoCapitalize = 'sentences',
  label,
  labelError,
  desc,
  secureTextEntry,
  placeholder,
  isInputError,
  keyboardType,
  onChangeText,
  onTogglePassword,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [animated] = useState(new Animated.Value(value === '' ? 0 : 1));
  const [color, setColor] = useState('#282828');

  useEffect(() => {
    animatedFocus();
  }, [isFocused]);

  const animatedFocus = () => {
    if (isFocused) setColor('#1D8AF5');
    else setColor('#868686');

    Animated.timing(animated, {
      toValue: value !== '' || isFocused ? 1 : 0,
      duration: 300,
      easing: Easing.linear,
    }).start();
  };

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const showPassword = type == 'password';
  const showError = labelError ? true : false;
  const descColor = !isInputError ? '#868686' : '#EA232A';

  return (
    <View style={styles.container}>
      <AnimatedText style={styles.label(animated, color)}>{label}</AnimatedText>
      <View style={styles.containerInput(color)}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          placeholderTextColor={'#C9C9C9'}
          numberOfLines={1}
          autoCapitalize={autoCapitalize}
          keyboardType={keyboardType}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {showPassword && (
          <TouchableOpacity
            style={styles.containerPassword}
            onPress={onTogglePassword}>
            <Image
              style={styles.image}
              source={secureTextEntry ? IcHidePassword : IcShowPassword}
            />
          </TouchableOpacity>
        )}
      </View>
      {desc && !showError && (
        <Text style={styles.desc(descColor)}>
          {'Password min. 8 characters.'}
        </Text>
      )}
      {showError && <Text style={styles.error}>{labelError}</Text>}
    </View>
  );
};

export default FloatingInput;

const styles = StyleSheet.create({
  container: {
    maxWidth: '100%',
    paddingTop: 10,
  },

  containerInput: color => ({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: os === 'android' ? 1 : 0.5,
    borderBottomColor: color,
  }),

  label: (animated, color) => ({
    position: 'absolute',
    left: 0,
    top: animated.interpolate({
      inputRange: [0, 1],
      outputRange: [18, 0],
    }),
    fontSize: animated.interpolate({
      inputRange: [0, 1],
      outputRange: [12, 10],
    }),
    color: animated.interpolate({
      inputRange: [0, 1],
      outputRange: ['#868686', color],
    }),
    zIndex: 999,
  }),

  input: {
    flex: 1,
    fontSize: 12,
    color: '#282828',
    paddingVertical: 4,
    paddingHorizontal: 0,
  },

  containerPassword: {
    padding: 4,
  },

  desc: color => ({
    fontSize: 10,
    color,
    marginTop: 4,
  }),

  error: {
    fontSize: 10,
    color: '#EA232A',
    marginTop: 4,
  },

  image: {
    height: 24,
    width: 24,
  },
});
