import React, { useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';


import { CATEGORIES } from '../data/dummy-data';

const CategoryMealScreen = (props) => {
    const { categoryId } = props.route.params
    const selectedcategory = CATEGORIES.find(cat => cat.id === categoryId)

    // Similar to componentDidMount and componentDidUpdate
    useEffect(() => {
        props.navigation.setOptions({
            title: selectedcategory.title,
            headerRight: () => (
                <Button title="Show Alert!" onPress={() => {
                    alert('Dummy test right button.')
                }} />
            )

        })
    });

    return (
        <View style={styles.screen}>
            <Text>The Category Mail Screen!</Text>
            <Text>{selectedcategory.title}</Text>
            <Button title="Go to Details!"
                onPress={() => { props.navigation.navigate("MealDetail") }} />
        </View>
    );

}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
export default CategoryMealScreen;