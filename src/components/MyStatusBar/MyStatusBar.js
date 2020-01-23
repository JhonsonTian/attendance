import React from 'react';
import { View, StatusBar, Platform } from 'react-native';
import { string } from 'prop-types';

MyStatusBar.propTypes = {
  backgroundColor: string,
};

MyStatusBar.defaultProps = {
  backgroundColor: 'blue',
};

export function MyStatusBar({ backgroundColor, ...props }) {
  const statusBarHeight = { height: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight };
  return (
    <View style={[statusBarHeight, { backgroundColor, width: '100%' }]}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}
