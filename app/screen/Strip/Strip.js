import React, {useState} from 'react';
import {Dimensions, View} from 'react-native';
import HorizontalStrips from '../../component/HorizontalStrips';
import VerticalStrips from '../../component/VerticalStrips';

export default Strip = () => {
  return (
    <View style={{flex: 1, padding: 10, flexDirection: 'row'}}>
      <VerticalStrips />
      <HorizontalStrips />
    </View>
  );
};
