import React from 'react';
import {ActivityIndicator, StyleSheet, Modal, View} from 'react-native';
import { useSelector } from 'react-redux';
import colors from '../config/colors';

export default ProgressBar = () => {
  const isVisible = useSelector(state =>  state.CommonReducers.loading)
  return (
    <View style={styles.container}>
      <Modal animationType="fade" transparent={true} visible={isVisible}>
        <View style={[styles.container]}>
          <ActivityIndicator size="large" color={colors.blue} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.colorWhite,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
