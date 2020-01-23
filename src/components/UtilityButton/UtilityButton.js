import React from 'react';
import { Text, FlatList } from 'react-native';
import { Badge } from 'native-base';
import { array, func } from 'prop-types';
import { styles } from './styles';
import { getRandomColor } from '../../utils/getRandomColor';

UtilityButton.propTypes = {
  data: array.isRequired,
  onButtonPress: func.isRequired,
};

export function UtilityButton({ data, onButtonPress }) {
  const colors = ['#c15a5a', '#f19a20', '#045086', 'orange', 'green'];

  return (
    <FlatList
      data={data}
      horizontal
      contentContainerStyle={styles.utility}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => {
        const backgroundColor = getRandomColor();
        return (
          <Badge style={{ ...styles.badge, backgroundColor }}>
            <Text style={styles.badgeText} onPress={() => onButtonPress(item.id)}>
              {item.text}
            </Text>
          </Badge>
        );
      }}
      keyExtractor={item => item.id.toString()}
    />
  );
}
