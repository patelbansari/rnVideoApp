import * as CommonActions from '../../redux/action/CommonAction';
import React, {useEffect} from 'react';
import {  StyleSheet, View} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import HorizontalStrips from '../../component/HorizontalStrips';
import VerticalStrips from '../../component/VerticalStrips';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default Strip = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const strips = useSelector(state => state.CommonReducers.strips)

  useEffect(() => {
      dispatch(CommonActions.getStrips())
      navigation.setParams({onNext:onNext})
  },[])

  useEffect(() => {
    navigation.setParams({strips:strips})
  },[strips])

  const onNext = (strips) => {
    let data = 'Selected Data\n\n'
    strips.map((item,index) => {
      data += index +') Item: '
      +item.name + '\n     Value: '
      +  item.values.filter(it => it.isSelected)[0]?.value 
      +'\n     Color: '
      +  item.values.filter(it => it.isSelected)[0]?.color 
      + '\n\n'
    })
    alert(data)
  }

  return (
    <ScrollView>
    <View style={style.container}>
      <VerticalStrips />
      <HorizontalStrips />
    </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container:{flex: 1, padding: 10, flexDirection: 'row'}
})
