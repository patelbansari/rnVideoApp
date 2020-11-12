import React from 'react';
import MyFeed from '../screen/myFeed/MyFeed';
import Strip from '../screen/Strip/Strip';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import colors from '../config/colors';
import {Image} from 'react-native';
import {TouchableOpacity} from 'react-native';

const Tab = createBottomTabNavigator();
const FeedStack = createStackNavigator();
const StripStack = createStackNavigator();
export const MainTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: colors.black,
        inactiveTintColor: colors.gray,
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

          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                route?.params?.profileImage();
              }}>
              <Image
                source={route?.params?.uri 
                  ? {uri:route?.params?.uri}
                  : require('../assets/image/ic_user.png')}
                style={{
                  width: 40,
                  height: 40,
                  marginEnd: 20,
                  borderRadius: 40 / 2,
                  overflow: 'hidden',
                  borderWidth: 3,
                }}
              />
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
        options={{
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </StripStack.Navigator>
  );
};
