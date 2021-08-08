import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailsScreen from '../screens/MealDetailsScreen'
import Colors from '../constants/color';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FavouriteScreen from '../screens/FavouritesScreen';
import FilterScreen from '../screens/FiltersScreen';
import { createDrawerNavigator, DrawerToggleButton } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const Mealsnavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Group screenOptions={{
                headerStyle: {
                    backgroundColor: Colors.primaryColor
                },
                headerTintColor: 'white',

            }}>
                <Stack.Screen name="categories" component={CategoriesScreen}
                    options={{
                        title: 'Meal Categories'
                    }} />
                <Stack.Screen name="categoryMeals" component={CategoryMealsScreen} />
                <Stack.Screen name="MealDetail" component={MealDetailsScreen} />
            </Stack.Group>
        </Stack.Navigator>
    );
}

const MealsTabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={() => ({
            tabBarActiveTintColor: Colors.accentColor,
            headerStyle: {
                backgroundColor: Colors.primaryColor
            },
            headerTintColor: 'white',

        })}>
            <Tab.Screen name="Home" component={Mealsnavigator} options={
                {
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" color={color} size={size} />
                    ),
                }
            } />
            <Tab.Screen name="Favourites" component={FavouriteScreen} options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="star" color={color} size={size} />
                ),
            }} />
        </Tab.Navigator>
    );
}

const DrawerNavigator = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Dashboard" component={MealsTabNavigator} options={{
                    headerShown: false,
                }} />
                <Drawer.Screen name="Filter" component={FilterScreen} options={{
                    headerStyle: {
                        backgroundColor: Colors.primaryColor
                    },
                    headerTintColor: 'white',
                }} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default DrawerNavigator;