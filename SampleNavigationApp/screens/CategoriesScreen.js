import React, { useEffect } from 'react';
import {
    StyleSheet,
    FlatList
} from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridItem from '../components/CategoryGridItem';

import { DrawerToggleButton } from '@react-navigation/drawer';

const CategoriesScreen = (props) => {


    // Similar to componentDidMount and componentDidUpdate
    useEffect(() => {
        props.navigation.setOptions({
            headerLeft: () => (
                <DrawerToggleButton tintColor='white' />
            )

        })
    });


    const renderGridItem = (itemData) => {
        return <CategoryGridItem title={itemData.item.title} color={itemData.item.color}
            onSelect={() => {
                props.navigation.navigate("categoryMeals", {
                    categoryId: itemData.item.id
                })
            }} />
    }

    return (
        < FlatList data={CATEGORIES} numColumns={2}
            renderItem={renderGridItem} />
        // <View style={styles.screen}>
        //     <Text>The Categories Screen!</Text>
        //     <Button title="Go to Meals!" onPress={() => { props.navigation.navigate("categoryMeals") }} />
        // </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
export default CategoriesScreen;