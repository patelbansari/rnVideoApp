import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import colors from '../config/colors';

export default VerticalStrip = () => {
const strips = useSelector(state => state.CommonReducers.strips)

   return strips ? <View style={style.verticalView}>
            {
               strips?.map((item,index) => {
                    let selectedBg = ''
                    for(const it of item.values) {
                        if(it.isSelected){
                            selectedBg = it.color
                            break
                        }else{
                            selectedBg = colors.blue
                        }
                      }
                      return  <View key = {index} style={[style.boxView,{marginTop:index != 0 ? 93: 58,backgroundColor:selectedBg}]}/>
                })
            }
    </View> : null
}

const style = StyleSheet.create({
   verticalView:{width:25,borderRadius:5,borderColor:colors.lightGray,borderWidth:2,paddingBottom:30},
   boxView:{height:20,backgroundColor:colors.black,marginTop:73,borderRadius:4}
})