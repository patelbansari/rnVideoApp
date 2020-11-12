import React from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../config/colors';

export default VerticalStrip = () => {
    return <View style={style.verticalView}>
            <View style={[style.boxView]}/>
            <View style={[style.boxView,{marginTop:93}]}/>
            <View style={[style.boxView,{marginTop:93}]}/>
    </View>
}

const style = StyleSheet.create({
   verticalView:{width:25,borderRadius:5,borderColor:colors.lightGray,borderWidth:2},
   boxView:{height:20,backgroundColor:colors.black,marginTop:73}
})