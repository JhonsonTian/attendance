import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { string, func, object } from 'prop-types';
import { styles } from './styles';

Button.propTypes = {
  title: string.isRequired,
  onPress: func.isRequired,
  style: object,
  textStyle: object,
};

Button.defaultProps = {
  style: {},
  textStyle: {},
};

export function Button({ title, onPress, style = {}, textStyle = {} }) {
  return (
    <TouchableOpacity
      style={{ ...styles.container, ...style }}
      activeOpacity={0.8}
      onPress={onPress}>
      <Text style={{ ...styles.text, ...textStyle }}>{title}</Text>
    </TouchableOpacity>
  );
}
