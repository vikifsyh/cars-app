import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import home from './screens/home';
import bookmark from './screens/bookmark';
import cart from './screens/cart';
import profil from './screens/profil';
import splashscreen from './screens/splashscreen';
import detail from './screens/detail';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 65,
          backgroundColor: '#1d224c',
          position: 'absolute',
          bottom: 16,
          left: 16,
          right: 16,
          borderRadius: 15,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={home}
        options={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: 'grey',
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Ionicons name="ios-home-outline" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Bookmark"
        component={bookmark}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: 'grey',
          tabBarIcon: ({color}) => (
            <Ionicons name="ios-bookmark-outline" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={cart}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: 'grey',
          tabBarIcon: ({color}) => (
            <Ionicons name="ios-cart-outline" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profil"
        component={profil}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: 'grey',
          tabBarIcon: ({color}) => (
            <Icon name="user-o" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="splashscreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="splashscreen" component={splashscreen} />
        <Stack.Screen name="home" component={home} />
        <Stack.Screen name="detail" component={detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
