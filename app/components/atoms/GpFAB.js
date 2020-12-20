import React from 'react';
import { FAB, useTheme } from 'react-native-paper';

const GpFAB = (props) => {
  const { backgroundColor, ...fabProps } = props;
  const { colors } = useTheme();

  const setBackgroundColor = () =>
    backgroundColor ? backgroundColor : colors.primary;

  return (
    <FAB
      theme={{ colors: { accent: setBackgroundColor() }, ...fabProps.theme }}
      {...fabProps}
    />
  );
};

export default GpFAB;
