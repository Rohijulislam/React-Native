import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const MovieItem = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <Image
                    source={{
                        uri: props.IMAGE_SERVER + props.item.poster_path,
                    }}
                    resizeMode="cover"
                    style={styles.image}
                />
                <View style={styles.inner}>
                    <View>
                        <Text style={styles.title}>
                            {props.item.title}
                        </Text>
                    </View>
                    <View
                        style={styles.iconsContainer}>
                        <MaterialIcons color="green" name="thumb-up" size={32} />
                        <Text
                            style={styles.vote_Count}>
                            {props.item.vote_count}
                        </Text>
                        <TouchableOpacity
                            onPress={() => console.log('Added!')}
                            activeOpacity={0.7}
                            style={styles.favouriteTouchable}>
                            <MaterialIcons
                                color="orange"
                                size={32}
                                name="favorite-outline"
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        marginVertical: 12
    },
    item: {
        flexDirection: 'row',
        flex: 1
    },
    image: {
        width: 100,
        height: 150,
        borderRadius: 10
    },
    inner: {
        flex: 1,
        marginLeft: 12
    },
    title: {
        fontSize: 22,
        paddingRight: 16
    },
    iconsContainer: {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center',
    },
    vote_Count: {
        fontSize: 18,
        paddingLeft: 10,
        color: '#64676D',
    },

    favouriteTouchable: {
        marginLeft: 14,
        flexDirection: 'row',
        padding: 2,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 40,
    }

});
export default MovieItem;