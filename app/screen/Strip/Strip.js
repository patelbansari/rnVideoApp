import * as CommonActions from '../../redux/action/CommonAction';
import React, {useEffect} from 'react';
import { StyleSheet, View} from 'react-native';
import { useDispatch } from 'react-redux';
import HorizontalStrips from '../../component/HorizontalStrips';
import VerticalStrips from '../../component/VerticalStrips';
import { ScrollView } from 'react-native';

export default Strip = () => {
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(CommonActions.getStrips())
  },[])

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
