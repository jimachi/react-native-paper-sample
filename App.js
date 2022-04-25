import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text>Home Screen</Text>
      <Button
        title="詳細へ"
        onPress={() => navigation.navigate('Detail')}
      />
    </View>
  );
};

function DetailScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text>Detail Screen</Text>
    </View>
  );
};

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'ホームだよん' }}
        />
        <Tab.Screen
          name="Detail"
          component={DetailScreen}
          options={{ title: '詳細だよ' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
