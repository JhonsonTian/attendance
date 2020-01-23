import React from 'react';
import { View, Text } from 'react-native';
import dayjs from 'dayjs';
import { object } from 'prop-types';
import { styles } from './styles';

InfoBar.propTypes = {
  data: object.isRequired,
};

export function InfoBar({ data }) {
  const { date } = data;
  const formatDate = dayjs(date).format('DD-MMM-YYYY');
  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <Text style={styles.title}>Class</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.subtitle}>{data.class[0]}</Text>
          <Text style={[styles.subtitle, styles.superScript]}>th </Text>
          <Text style={styles.subtitle}>{data.class.slice(-1)}</Text>
        </View>
      </View>
      <View style={[styles.column, styles.border]}>
        <Text style={styles.title}>Subject</Text>
        <Text style={styles.subtitle}>{data.subject}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.title}>Date</Text>
        <Text style={styles.subtitle}>{formatDate}</Text>
      </View>
    </View>
  );
}
