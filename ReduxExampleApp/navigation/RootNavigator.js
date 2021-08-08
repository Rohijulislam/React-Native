import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import screens
import Movies from '../screens/movies';
import Favorites from '../screens/favorites';
const Tab = createBottomTabNavigator();

const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="Movies"
                    component={Movies}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialIcons name="movie-filter" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Favorites"
                    component={Favorites}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialIcons name="favorite" color={color} size={size} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};
export default RootNavigator;