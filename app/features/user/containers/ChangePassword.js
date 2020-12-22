import React from 'react';
import { View } from 'react-native';
import { Card, useTheme } from 'react-native-paper';
import { useImmer } from 'use-immer';
import { GpFAB, GpTextField } from '../../../components/atoms';
import { flex, margins, paddings } from '../../../config/styles';
import styles from './styles';

const ChangePassword = () => {
  const { flex1 } = flex;
  const { mx1, my2, my1 } = margins;
  const { pa2 } = paddings;
  const { colors } = useTheme();
  const [state, setState] = useImmer({
    oldPassword: '',
    newPassword: '',
    newPasswordConfirmation: '',
  });

  return (
    <View style={flex1}>
      <Card style={[mx1, my2, pa2]}>
        <GpTextField
          style={my1}
          value={state.oldPassword}
          onChangeText={(value) =>
            setState((draft) => {
              draft.oldPassword = value;
            })
          }
          required
          mode="outlined"
          label="Old Password"
          secureTextEntry
        />

        <GpTextField
          style={my1}
          value={state.newPassword}
          onChangeText={(value) =>
            setState((draft) => {
              draft.newPassword = value;
            })
          }
          required
          mode="outlined"
          label="New Password"
          secureTextEntry
        />

        <GpTextField
          style={my1}
          value={state.newPasswordConfirmation}
          onChangeText={(value) =>
            setState((draft) => {
              draft.newPasswordConfirmation = value;
            })
          }
          required
          mode="outlined"
          label="New Password Confirm"
          secureTextEntry
        />
      </Card>

      <GpFAB
        icon="content-save"
        style={styles.fab}
        backgroundColor={colors.success}
        color="white"
        onPress={() => console.log('pressed')}
      />
    </View>
  );
};

export default ChangePassword;
