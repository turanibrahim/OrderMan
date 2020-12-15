import * as React from 'react';
import { Appbar } from 'react-native-paper';

function AppHeader(props) {
  const { scene, navigation } = props;
  const { options } = scene.descriptor;
  const showBackButton =
    options.showBackButton !== undefined ? options.showBackButton : false;
  const openDrawer = () => {
    navigation.toggleDrawer();
  };

  return (
    <Appbar>
      {showBackButton ? (
        <Appbar.Action
          color="white"
          icon="arrow-left"
          onPress={() => navigation.goBack()}
        />
      ) : (
        <Appbar.Action color="white" icon="menu" onPress={openDrawer} />
      )}
      <Appbar.Content title={options.title} subtitle={options.subtitle} />
    </Appbar>
  );
}
export default AppHeader;
