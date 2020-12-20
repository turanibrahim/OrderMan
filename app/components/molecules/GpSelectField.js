import React, { useEffect, useMemo, useCallback } from 'react';
import {
  View,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {
  TextInput,
  Button,
  Portal,
  Dialog,
  List,
  Divider,
  HelperText,
} from 'react-native-paper';
import PropTypes from 'prop-types';
import { useImmer } from 'use-immer';
import { AppStyles } from '../../config/styles';

const { primary } = AppStyles.colors;

const GpSelectField = (props) => {
  const {
    onSelect,
    onClear,
    data = [],
    loading,
    iconColor,
    disabled,
    required,
    style,
    error,
    value,
    inputStyle,
    errorMessage,
    ...inputProps
  } = props;
  const [state, setState] = useImmer({
    isChoosingDialogVisible: false,
    filteredData: [],
    searchText: '',
    isBlurred: false,
  });
  const {
    isChoosingDialogVisible,
    filteredData,
    searchText,
    isBlurred,
  } = state;

  const isHelperTextVisible = useMemo(() => {
    if (!isBlurred) {
      return false;
    } else if (required && !value) {
      return true;
    } else if (errorMessage) {
      return true;
    } else {
      return false;
    }
  }, [errorMessage, isBlurred, required, value]);

  const chooseItem = useCallback(
    (item) => {
      onSelect(item);
      setState((draft) => {
        draft.isChoosingDialogVisible = false;
      });
    },
    [onSelect, setState],
  );

  const filterItems = useCallback(
    (text = null) => {
      if (text === null) {
        setState((draft) => {
          draft.searchText = '';
          draft.filteredData = data;
        });

        return;
      }

      setState((draft) => {
        draft.searchText = text;
      });

      const filteredItems = data.filter((item) =>
        item.translatedName.toLowerCase().includes(text.toLowerCase()),
      );

      setState((draft) => {
        draft.filteredData = filteredItems;
      });
    },
    [data, setState],
  );

  const FlatListItem = ({ item }) => {
    return (
      <>
        <List.Item onPress={() => chooseItem(item)} title={item.name} />
        <Divider />
      </>
    );
  };

  const clearTextInput = useCallback(() => {
    onClear();
    setState((draft) => {
      draft.isChoosingDialogVisible = false;
    });
  }, [onClear, setState]);

  const openDialog = useCallback(() => {
    setState((draft) => {
      draft.isBlurred = true;
      draft.isChoosingDialogVisible = true;
    });
  }, [setState]);

  useEffect(() => {
    setState((draft) => {
      draft.filteredData = data;
    });
  }, [data, setState]);

  return (
    <View>
      <View style={style}>
        <TouchableOpacity onPress={() => openDialog()}>
          <TextInput
            {...inputProps}
            error={(required && !value && isBlurred) || error}
            editable={false}
            dense={inputProps.dense ?? true}
            style={inputStyle}
            value={value}
          />
        </TouchableOpacity>

        {isHelperTextVisible && (
          <View>
            <HelperText type="error">
              {errorMessage ? errorMessage : 'Field required'}
            </HelperText>
          </View>
        )}
      </View>

      <Portal>
        <Dialog
          visible={isChoosingDialogVisible}
          onDismiss={() => {
            setState((draft) => {
              draft.isChoosingDialogVisible = false;
            });
          }}
          dismissable={false}
          style={styles.flex}>
          <Dialog.Title style={styles.flexShrink}>
            {inputProps.label}
          </Dialog.Title>

          <Dialog.Content style={styles.flexGrow}>
            {loading ? (
              <ActivityIndicator color={primary} />
            ) : (
              <View style={styles.contentWrapper}>
                <TextInput
                  value={searchText}
                  dense
                  mode="outlined"
                  label="Search"
                  onChangeText={(text) => filterItems(text)}
                />

                <FlatList
                  data={filteredData}
                  renderItem={FlatListItem}
                  keyExtractor={(item) => item.id.toString()}
                />
              </View>
            )}
          </Dialog.Content>

          <Dialog.Actions style={styles.flexShrink}>
            {onClear && <Button onPress={() => clearTextInput()}>Clear</Button>}

            <Button
              onPress={() => {
                setState((draft) => {
                  draft.isChoosingDialogVisible = false;
                });
              }}>
              Cancel
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

const styles = StyleSheet.create({
  flex: { flex: 1 },
  flexShrink: { flexShrink: 1 },
  flexGrow: { flexGrow: 1 },
  contentWrapper: { flex: 1, flexGrow: 1 },
});

GpSelectField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  mode: PropTypes.oneOf(['outlined', 'flat']),
  loading: PropTypes.bool,
  required: PropTypes.bool,
  iconColor: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  inputStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
};

GpSelectField.defaultProps = {
  mode: 'outlined',
  value: [],
  data: [],
};

export default GpSelectField;
