import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { Thumbnail, Badge } from 'native-base';
import { object, func } from 'prop-types';
import { styles } from './styles';
import { getRandomColor } from '../../utils/getRandomColor';

UserList.propTypes = {
  data: object.isRequired,
  onItemPress: func,
};

UserList.defaultProps = {
  onItemPress: () => {},
};

export function UserList({ data, onItemPress }) {
  return (
    <TouchableHighlight
      style={styles.container}
      onPress={() => onItemPress(data.id)}
      underlayColor="grey">
      <>
        <View style={styles.side}>
          <Thumbnail small source={{ uri: data.image }} />
        </View>
        <View style={styles.middle}>
          <Text style={styles.name}>{data.name}</Text>
          <Text style={styles.id}>ID : {data.id}</Text>
        </View>
        <View style={styles.side}>
          <View style={{ ...styles.statusContainer, backgroundColor: getRandomColor() }}>
            <Text style={styles.statusText}>{data.status[0].toUpperCase()}</Text>
          </View>
        </View>
      </>
    </TouchableHighlight>
  );
}
