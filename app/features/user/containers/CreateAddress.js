import React from 'react';
import { KeyboardAvoidingView, View, ScrollView } from 'react-native';
import { useImmer } from 'use-immer';
import { Card, useTheme } from 'react-native-paper';
import { GpSelectField } from '../../../components/molecules';
import { GpFAB, GpTextField } from '../../../components/atoms';
import { flex, margins, paddings } from '../../../config/styles';
import styles from './styles';
import CITIES from '../../../config/cities';

const CreateAddress = () => {
  const { ma2, mx1, my2 } = margins;
  const { pa1 } = paddings;
  const [state, setState] = useImmer({
    city: {
      id: '',
      name: '',
    },
    province: {
      id: '',
      name: '',
    },
    district: {
      id: '',
      name: '',
    },
    title: '',
    address: '',
    phone: '',
  });
  const { flex1, flexGrow } = flex;
  const { colors } = useTheme();

  return (
    <View style={flex1}>
      <KeyboardAvoidingView>
        <ScrollView>
          <Card style={[mx1, my2, pa1]}>
            <GpTextField
              style={ma2}
              mode="outlined"
              label="Title"
              value={state.title}
              dense
              onChangeText={(text) =>
                setState((draft) => {
                  draft.title = text;
                })
              }
            />

            <GpTextField
              style={ma2}
              mode="outlined"
              label="Address"
              value={state.address}
              dense
              multiline
              numberOfLines={4}
              onChangeText={(text) =>
                setState((draft) => {
                  draft.address = text;
                })
              }
            />

            <GpSelectField
              data={CITIES}
              value={state.city.name}
              style={[ma2, flexGrow]}
              label="City"
              onSelect={(city) =>
                setState((draft) => {
                  draft.city = city;
                })
              }
              onClear={() =>
                setState((draft) => {
                  draft.city = {
                    id: '',
                    name: '',
                  };
                })
              }
            />

            <GpSelectField
              data={[
                { id: 1, name: 'province 1' },
                { id: 2, name: 'province 2' },
                { id: 3, name: 'province 3' },
              ]}
              value={state.province.name}
              style={[ma2, flexGrow]}
              label="Province"
              onSelect={(province) =>
                setState((draft) => {
                  draft.province = province;
                })
              }
              onClear={() =>
                setState((draft) => {
                  draft.province = {
                    id: '',
                    name: '',
                  };
                })
              }
            />

            <GpSelectField
              data={[
                { id: 1, name: 'district 1' },
                { id: 2, name: 'district 2' },
                { id: 3, name: 'district 3' },
              ]}
              value={state.district.name}
              style={[ma2, flexGrow]}
              label="District"
              onSelect={(district) =>
                setState((draft) => {
                  draft.district = district;
                })
              }
              onClear={() =>
                setState((draft) => {
                  draft.district = {
                    id: '',
                    name: '',
                  };
                })
              }
            />

            <GpTextField
              style={ma2}
              mode="outlined"
              label="Phone"
              value={state.phone}
              dense
              onChangeText={(text) =>
                setState((draft) => {
                  draft.phone = text;
                })
              }
              keyboardType="phone-pad"
            />
          </Card>
        </ScrollView>
      </KeyboardAvoidingView>

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

export default CreateAddress;
