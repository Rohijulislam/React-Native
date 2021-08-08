import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

const FavouriteScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>The Favourite Screen!</Text>
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
export default FavouriteScreen;