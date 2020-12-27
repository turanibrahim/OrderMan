import React, { useMemo } from 'react';
import { View, Text, KeyboardAvoidingView, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  Button,
  Card,
  RadioButton,
  TextInput,
  useTheme,
} from 'react-native-paper';
import { material } from 'react-native-typography';
import { useImmer } from 'use-immer';
import { flex, margins, paddings } from '../../../config/styles';

const Checkout = () => {
  const { flex1, flex2, flexRow, alignItemsCenter } = flex;
  const { mx1, mr2, mr10, ml10, my1, my2 } = margins;
  const { pa2 } = paddings;
  const { colors } = useTheme();
  const [state, setState] = useImmer({
    paymentMethods: {
      delivery: false,
      pickUp: false,
      reservation: false,
    },
    cardInformation: {
      fullName: '',
      cardNumber: '',
      expYear: '',
      expMonth: '',
      cvc2: '',
    },
  });
  const { paymentMethods, cardInformation } = state;

  const isPaymentChosen = useMemo(() => {
    const { delivery, pickUp, reservation } = paymentMethods;

    if (delivery || pickUp || reservation) {
      return true;
    } else {
      return false;
    }
  }, [paymentMethods]);

  const isCardInformationFilled = useMemo(() => {
    const { fullName, cardNumber, expYear, expMonth, cvc2 } = cardInformation;
    if (fullName && cardNumber && expYear && expMonth && cvc2) {
      return true;
    } else {
      return false;
    }
  }, [cardInformation]);

  return (
    <View style={flex1}>
      <KeyboardAvoidingView contentContainerStyle={flex1}>
        <ScrollView>
          <Text style={[mx1, my2, material.display1]}>Choose Order Type</Text>

          <Card style={[mx1, my2, pa2]}>
            <TouchableOpacity
              style={[flexRow, alignItemsCenter]}
              onPress={() =>
                setState((draft) => {
                  draft.paymentMethods.delivery = true;
                  draft.paymentMethods.pickUp = false;
                  draft.paymentMethods.reservation = false;
                })
              }>
              <RadioButton
                value={paymentMethods.delivery}
                status={paymentMethods.delivery ? 'checked' : 'unchecked'}
                onPress={() =>
                  setState((draft) => {
                    draft.paymentMethods.delivery = true;
                    draft.paymentMethods.pickUp = false;
                    draft.paymentMethods.reservation = false;
                  })
                }
              />
              <Text style={material.title}>Delivery</Text>
            </TouchableOpacity>

            {paymentMethods.delivery && (
              <View style={pa2}>
                <Text style={material.title}>Address Title</Text>
                <Text style={material.body}>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old.
                </Text>
                <Text style={material.body2}>+90 531 681 62 62</Text>
              </View>
            )}
          </Card>

          <Card style={[mx1, my2, pa2]}>
            <TouchableOpacity
              style={[flexRow, alignItemsCenter]}
              onPress={() =>
                setState((draft) => {
                  draft.paymentMethods.delivery = false;
                  draft.paymentMethods.pickUp = true;
                  draft.paymentMethods.reservation = false;
                })
              }>
              <RadioButton
                value={paymentMethods.pickUp}
                status={paymentMethods.pickUp ? 'checked' : 'unchecked'}
                onPress={() =>
                  setState((draft) => {
                    draft.paymentMethods.delivery = false;
                    draft.paymentMethods.pickUp = true;
                    draft.paymentMethods.reservation = false;
                  })
                }
              />
              <Text style={material.title}>Pick Up</Text>
            </TouchableOpacity>
          </Card>

          <Card style={[mx1, my2, pa2]}>
            <TouchableOpacity
              style={[flexRow, alignItemsCenter]}
              onPress={() =>
                setState((draft) => {
                  draft.paymentMethods.delivery = false;
                  draft.paymentMethods.pickUp = false;
                  draft.paymentMethods.reservation = true;
                })
              }>
              <RadioButton
                value={paymentMethods.reservation}
                status={paymentMethods.reservation ? 'checked' : 'unchecked'}
                onPress={() =>
                  setState((draft) => {
                    draft.paymentMethods.delivery = false;
                    draft.paymentMethods.pickUp = false;
                    draft.paymentMethods.reservation = true;
                  })
                }
              />
              <Text style={material.title}>Reservation</Text>
            </TouchableOpacity>
          </Card>

          {isPaymentChosen && (
            <Card style={[mx1, my2, pa2]}>
              <Text style={material.title}>Credit Cart</Text>
              <TextInput
                style={my1}
                label="Name Surname"
                dense
                mode="outlined"
                value={cardInformation.fullName}
                onChangeText={(value) =>
                  setState((draft) => {
                    draft.cardInformation.fullName = value;
                  })
                }
              />
              <TextInput
                style={my1}
                label="Cart Number"
                dense
                mode="outlined"
                value={cardInformation.cardNumber}
                onChangeText={(value) =>
                  setState((draft) => {
                    draft.cardInformation.cardNumber = value;
                  })
                }
                maxLength={16}
              />

              <View style={[flexRow]}>
                <TextInput
                  style={[flex1, my1, mr2]}
                  label="Month"
                  dense
                  mode="outlined"
                  keyboardType="numeric"
                  value={cardInformation.expMonth}
                  onChangeText={(value) =>
                    setState((draft) => {
                      draft.cardInformation.expMonth = value;
                    })
                  }
                  maxLength={2}
                />
                <TextInput
                  style={[flex1, my1, mr10]}
                  label="Year"
                  dense
                  mode="outlined"
                  keyboardType="numeric"
                  value={cardInformation.expYear}
                  onChangeText={(value) =>
                    setState((draft) => {
                      draft.cardInformation.expYear = value;
                    })
                  }
                  maxLength={2}
                />
                <TextInput
                  style={[flex2, ml10, my1]}
                  label="CVC2"
                  dense
                  mode="outlined"
                  keyboardType="numeric"
                  value={cardInformation.cvc2}
                  onChangeText={(value) =>
                    setState((draft) => {
                      draft.cardInformation.cvc2 = value;
                    })
                  }
                  maxLength={3}
                />
              </View>
            </Card>
          )}

          <Button
            disabled={!isCardInformationFilled}
            dark
            color={colors.success}
            style={[mx1, my2]}
            mode="contained">
            Place Order
          </Button>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Checkout;
