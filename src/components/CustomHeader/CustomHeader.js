import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'native-base';
import { string, func } from 'prop-types';
import { styles } from './styles';

CustomHeader.propTypes = {
  backgroundColor: string,
  title: string.isRequired,
  onMenuPress: func,
  onSearchPress: func,
  onOptionsPress: func,
};

CustomHeader.defaultProps = {
  backgroundColor: 'blue',
  onMenuPress: () => {},
  onSearchPress: () => {},
  onOptionsPress: () => {},
};

export function CustomHeader({
  backgroundColor,
  title,
  onMenuPress,
  onSearchPress,
  onOptionsPress,
}) {
  return (
    <View style={{ backgroundColor, ...styles.container }}>
      <View style={styles.leftColumn}>
        <Icon name="menuunfold" type="AntDesign" style={styles.icon} onPress={onMenuPress} />
      </View>
      <View style={styles.middleColumn}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.rightColumn}>
        <Icon name="magnifying-glass" type="Entypo" style={styles.icon} onPress={onSearchPress} />
        <Icon
          name="dots-three-vertical"
          type="Entypo"
          style={styles.icon}
          onPress={onOptionsPress}
        />
      </View>
    </View>
  );
}
