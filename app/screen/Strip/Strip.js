import * as CommonActions from '../../redux/action/CommonAction';
import React, {useEffect, useState} from 'react';
import {Dimensions, View} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import HorizontalStrips from '../../component/HorizontalStrips';
import VerticalStrips from '../../component/VerticalStrips';
import { ScrollView } from 'react-native';

export default Strip = () => {
  const dispatch = useDispatch()
  const strips = useSelector(state => state.CommonReducers.strips)
  console.log('strips',strips)

  useEffect(() => {
      dispatch(CommonActions.getStrips())
  },[])
  return (
    <ScrollView>
    <View style={{flex: 1, padding: 10, flexDirection: 'row'}}>
      <VerticalStrips strips={strips}/>
      <HorizontalStrips strips={strips} />
    </View>
    </ScrollView>
  );
};
