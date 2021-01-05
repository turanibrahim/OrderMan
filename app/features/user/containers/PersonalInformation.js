import React from 'react';
import { View, Text } from 'react-native';
import { Card, TextInput, useTheme } from 'react-native-paper';
import { useImmer } from 'use-immer';
import { material } from 'react-native-typography';
import { GpFAB } from '../../../components/atoms';
import { flex, margins, paddings } from '../../../config/styles';
import styles from './styles';

const PersonalInformation = () => {
  const { flex1 } = flex;
  const { ma2 } = margins;
  const { pa2 } = paddings;
  const { colors } = useTheme();
  const [state, setState] = useImmer({
    name: 'John',
    surname: 'Doe',
    birthDate: '01.01.1970',
    email: 'example@live.com',
  });

  return (
    <View style={flex1}>
      <Card style={[ma2, pa2]}>
        <TextInput
          label="Name"
          mode="outlined"
          value={state.name}
          onChangeText={(name) =>
            setState((draft) => {
              draft.name = name;
            })
          }
        />
      </Card>

      <Card style={[ma2, pa2]}>
        <TextInput
          label="Surname"
          mode="outlined"
          value={state.surname}
          onChangeText={(surname) =>
            setState((draft) => {
              draft.surname = surname;
            })
          }
        />
      </Card>

      <Card style={[ma2, pa2]}>
        <Text style={material.title}>Birth Date</Text>
        <Text>{state.birthDate}</Text>
      </Card>

      <Card style={[ma2, pa2]}>
        <Text style={material.title}>Email Address</Text>
        <Text>{state.email}</Text>
      </Card>

      <GpFAB
        style={styles.fab}
        color="white"
        icon="content-save"
        backgroundColor={colors.success}
        onPress={() => console.log('pressed')}
      />
    </View>
  );
};

export default PersonalInformation;
