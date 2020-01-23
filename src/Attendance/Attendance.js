import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { Badge } from 'native-base';
import { MyStatusBar } from '../components/MyStatusBar';
import { CustomHeader } from '../components/CustomHeader';
import { InfoBar } from '../components/InfoBar';
import { Button } from '../components/Button';
import { UtilityButton } from '../components/UtilityButton';
import { styles } from './styles';
import { UserList } from '../components/UserList';

const INFO_DATA = {
  class: '6th B',
  subject: 'English',
  date: new Date(2017, 6, 24),
};

const UTILITY_BUTTON = [
  {
    id: 1,
    text: 'Mark all present',
  },
  {
    id: 2,
    text: 'Mark all left',
  },
  {
    id: 3,
    text: 'Mark all absence',
  },
];

const users = [
  {
    id: '0098',
    name: 'Andy Raj Kapoor',
    image: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
    status: 'present',
  },
  {
    id: '0897',
    name: 'Disha Chapola',
    image: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
    status: 'absence',
  },
  {
    id: '0989',
    name: 'Anand Sharma',
    image: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
    status: 'unknown',
  },
];

export function Attendance() {
  function onMenuPress() {
    console.warn('menu');
  }

  function onSearchPress() {
    console.warn('search');
  }

  function onOptionPress() {
    console.warn('options');
  }

  function onSubmitPress() {
    console.warn('submit');
  }

  function onUtilityPress(id) {
    console.warn(id);
  }

  function onItemPress(id) {
    console.warn(id);
  }

  return (
    <View style={styles.container}>
      <MyStatusBar backgroundColor="#064d45" barStyle="light-content" />
      <CustomHeader
        backgroundColor="#097368"
        title="Attendance"
        onMenuPress={onMenuPress}
        onSearchPress={onSearchPress}
        onOptionsPress={onOptionPress}
      />
      <InfoBar data={INFO_DATA} />
      <View style={styles.body}>
        <View style={styles.bodyInfo}>
          <UtilityButton data={UTILITY_BUTTON} onButtonPress={onUtilityPress} />
          <FlatList
            data={users}
            renderItem={({ item }) => <UserList data={item} onItemPress={onItemPress} />}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            keyExtractor={item => item.id}
          />
        </View>
        <Button title="SUBMIT" onPress={onSubmitPress} style={{ marginTop: 10 }} />
      </View>
    </View>
  );
}
