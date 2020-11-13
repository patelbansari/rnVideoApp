import * as CommonActions from '../redux/action/CommonAction'
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import colors from '../config/colors';

export default HorizontalStrips = () => {
  const dispatch = useDispatch()
  const strips = useSelector(state => state.CommonReducers.strips)

  const renderBox = (item,position,title) => {
    return (
      <TouchableOpacity
      key={position}
      onPress={() => {
        const stripsItem = [...strips]
        stripsItem.map((data) => {
          if(data.name === title){
            data.values.map((it) => {
              if (item.id === it.id) {
                it.isSelected = true
              } else {
                it.isSelected = false;
              }
            });
          }
        })
        dispatch(CommonActions.updateStrips(stripsItem))
      }}>
      <View style={style.boxView}>
        <View style={[style.box,{backgroundColor:item.color}]} />
        <Text style={style.boxCount} numberOfLines={1} ellipsizeMode="tail">
          {item.value}
        </Text>
      </View>
      </TouchableOpacity>
    );
  };

  const renderRow = (item, index) => {
    let selectedcount 
    for(const it of item.values) {
      if(it.isSelected){
        selectedcount = it.value
        break;
      }else{
        selectedcount = 0
      }
   }

    return (
      <View key={index}>
        <View style={style.titleView}>
          <Text style={style.title}>
            {item.name}
            <Text style={{fontSize: 15}}> {`(${item.unit})`} </Text>
          </Text>
    <Text style={style.count}>{selectedcount}</Text>
        </View>
        <ScrollView horizontal style={style.scrollView}>
          <View style={style.scrollTop}>
            {
              item.values.map((it,position) => {
                return renderBox(it,position,item.name)
              })
            }
          </View>
        </ScrollView>
      </View>
    );
  };
  
  return (
    <View style={style.topView}>
      {strips?.map((item, index) => {
        return renderRow(item, index);
      })}
    </View>
  );
};

const style = StyleSheet.create({
  topView: {flex: 1, borderRadius: 5, paddingStart: 10},
  titleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    height: 53,
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    color: colors.lightGray,
    fontWeight: 'bold',
  },
  count: {
    borderRadius: 5,
    borderWidth: 2,
    paddingHorizontal: 25,
    paddingVertical: 5,
    fontSize: 15,
    textAlign: 'center',
    borderColor: colors.lightGray,
    color: colors.lightGray,
  },
  scrollView: {height: 60},
  scrollTop: {height: 20, marginTop: 5, flexDirection: 'row'},
  boxView: {width: 60, marginEnd: 5},
  box: {
    width: 60,
    height: 20,
    backgroundColor: colors.gray,
    borderRadius: 5
  },
  boxCount: {textAlign: 'center', color: colors.lightGray, fontWeight: 'bold'},
});
