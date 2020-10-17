import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { material } from 'react-native-typography';
import { useDispatch } from 'react-redux';
import * as loginActions from '~/features/login/redux/actions';
import styles from './styles';
import { paddings } from '~/config/styles';

export default function Home() {
  const dispatch = useDispatch();
  const { py2 } = paddings;
  const onLogout = () => dispatch(loginActions.logOut());

  return (
    <View style={styles.container}>
      <Text style={[py2, material.title]}>
        Welcome to our graduation project
      </Text>
      <Button icon="logout" mode="outlined" onPress={onLogout}>
        Logout
      </Button>
    </View>
  );
}
