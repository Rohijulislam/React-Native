import React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeFavorite } from '../store/actions/movies';
import MovieItem from '../components/movieItem';

const Favorites = () => {

    const favorites = useSelector(state => state.moviesReducer.favorites);
    const dispatch = useDispatch();
    const removeFromFavorites = movie => dispatch(removeFavorite(movie));
    const handleRemoveFavorite = movie => {
        removeFromFavorites(movie);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Favorites</Text>
            <View style={styles.inner}>
                {favorites.length === 0 ? (
                    <Text style={styles.emptyFavText}>
                        Add a movie to the list.
                    </Text>
                ) :
                    (<FlatList
                        data={favorites}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => {
                            const IMAGE_SERVER =
                                'https://image.tmdb.org/t/p/w185';
                            return (
                                <MovieItem item={item} isFav={true} IMAGE_SERVER={IMAGE_SERVER}
                                    removeFromFavorites={handleRemoveFavorite} />
                            );
                        }}
                        showsVerticalScrollIndicator={false}
                    />)}
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        paddingHorizontal: 20
    },
    title: {
        fontSize: 22
    },
    emptyFavText: {
        color: '#010101',
        fontSize: 18
    },
    inner: {
        flex: 1,
        marginTop: 12
    }
});
export default Favorites;