import React from 'react';
import MyFeed from '../screen/myFeed/MyFeed';
import Strip from '../screen/Strip/Strip';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import colors from '../config/colors';
import {Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native';
import IcUser from '../assets/image/ic_user.svg'
const Tab = createBottomTabNavigator();
const FeedStack = createStackNavigator();
const StripStack = createStackNavigator();
export const MainTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: colors.black,
        inactiveTintColor: colors.gray,
        keyboardHidesTabBar: true,
        labelStyle: {
          fontSize: 15,
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          textAlignVertical: 'center',
        },
      }}>
      <Tab.Screen
        name="My Feed"
        component={feedStack}
        options={{
          title: 'My Feed',
        }}
      />
      <Tab.Screen
        name="Strip"
        component={stripStack}
        options={{
          title: 'Strip',
        }}
      />
    </Tab.Navigator>
  );
};

const feedStack = () => {
  return (
    <FeedStack.Navigator>
      <FeedStack.Screen
        name="My Feed"
        component={MyFeed}
        options={({navigation, route}) => ({
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerStyle:{
            elevation:0,
            shadowOpacity:0
          },

          headerRight: () => (
           
            <TouchableOpacity
              onPress={() => {
                route?.params?.profileImage();
              }}>
                
                {route?.params?.uri  ?  
                <Image
                source={{uri:route?.params?.uri}
                 }
                style={{
                  width: 40,
                  height: 40,
                  marginEnd: 20,
                  borderRadius: 40 / 2,
                  overflow: 'hidden',
                  borderWidth: 3,
                }}
              /> :  <View style={{height:40,width:40,marginEnd:20}}> 
              <IcUser /> 
              </View> }
             
            </TouchableOpacity>
          ),
        })}
      />
    </FeedStack.Navigator>
  );
};

const stripStack = () => {
  return (
    <StripStack.Navigator>
      <StripStack.Screen
        name="Test Strip"
        component={Strip}
        options={({navigation, route}) => ({
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerStyle:{
            elevation:0,
            shadowOpacity:0
          },
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                route?.params?.onNext(route?.params?.strips);
              }}>
              <Text style={style.next}>Next</Text>
            </TouchableOpacity>
          ),
        })}
      />
    </StripStack.Navigator>
  );
};
const style = StyleSheet.create({
  next:{marginEnd:20,backgroundColor:colors.lightGray,borderRadius:15,paddingHorizontal:10,paddingVertical:5,color:colors.white}
})
