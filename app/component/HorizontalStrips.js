import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native';
import colors from '../config/colors';

export default HorizontalStrips = (props) => {
    console.log('props',props)
    const renderBox = () => {
        return <View style={style.boxView}>
        <View style={style.box} />
        <Text style={style.boxCount} numberOfLines={1} ellipsizeMode='tail'>00000000</Text>
      </View>
    }
  const renderRow = (item) => {
    return (
      <View>
        <View style={style.titleView}>
          <Text style={style.title}>
            Total Chlorine<Text> (ppm) </Text>
          </Text>
          <Text style={style.count}>0</Text>
        </View>
        <ScrollView horizontal style={style.scrollView}>
          <View style={style.scrollTop}>
            {renderBox()}
            {renderBox()}
            {renderBox()} 
            {renderBox()} 
            {renderBox()}
          </View>
        </ScrollView>
      </View>
    );
  };
  return (
    <View style={style.topView}>
        {
            props?.strips?.map((item,index) => {
                return renderRow(item)
            })
        }
     
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
  scrollTop: {height: 20, marginTop: 20, flexDirection: 'row'},
  boxView: {width: 60, marginEnd: 10},
  box: {
    width: 60,
    height: 20,
    backgroundColor: colors.gray,
    borderRadius: 4,
  },
  boxCount: {textAlign: 'center', color: colors.black},
});
