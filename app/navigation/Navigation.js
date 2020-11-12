import React from 'react';
import MyFeed from '../screen/myFeed/MyFeed';
import Strip from '../screen/Strip/Strip';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import colors from '../config/colors';
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
        }}/>
    </Tab.Navigator>
  );
};

const feedStack = () => {
  return (
    <FeedStack.Navigator>
      <FeedStack.Screen name="My Feed" component={MyFeed} options={{
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }} />
    </FeedStack.Navigator>
  );
};

const stripStack = () => {
  return (
    <StripStack.Navigator>
      <StripStack.Screen name="Strip" component={Strip} options={{
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}/>
    </StripStack.Navigator>
  );
};
