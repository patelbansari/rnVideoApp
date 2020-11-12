import React from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../config/colors';

export default VerticalStrip = (props) => {
    return <View style={style.verticalView}>
            {
                props?.strips?.map((item,index) => {
                    return <View style={[style.boxView,{marginTop:index != 0 ? 93: 73}]}/>
                })
            }
    </View>
}

const style = StyleSheet.create({
   verticalView:{width:25,borderRadius:5,borderColor:colors.lightGray,borderWidth:2,paddingBottom:30},
   boxView:{height:20,backgroundColor:colors.black,marginTop:73}
})