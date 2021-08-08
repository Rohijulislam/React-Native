import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getMovies, addFavorite, removeFavorite } from '../store/actions/movies';
import MovieItem from '../components/movieItem';

const Movies = () => {
    const { movies, favorites } = useSelector(state => state.moviesReducer);
    const dispatch = useDispatch();
    const fetchMovies = () => dispatch(getMovies());
    const addToFavorites = movie => dispatch(addFavorite(movie));
    const removeFromFavorites = movie => dispatch(removeFavorite(movie));

    const handleAddFavorite = movie => {
        addToFavorites(movie);
    };
    const handleRemoveFavorite = movie => {
        removeFromFavorites(movie);
    };
    useEffect(() => {
        fetchMovies();
    }, []);

    const exists = movie => {
        if (favorites.filter(item => item.id === movie.id).length > 0) {
            return true;
        }
        return false;
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Popular Movies</Text>
            <View style={styles.flatListContainer}>
                <FlatList
                    data={movies}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => {
                        const IMAGE_SERVER =
                            'https://image.tmdb.org/t/p/w185';
                        return (
                            <MovieItem item={item} isFav={exists(item)} IMAGE_SERVER={IMAGE_SERVER}
                                addToFavorites={handleAddFavorite} removeFromFavorites={handleRemoveFavorite} />
                        );
                    }}
                    showsVerticalScrollIndicator={false}
                />
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
    flatListContainer: {
        flex: 1,
        marginTop: 12
    }
});
export default Movies;